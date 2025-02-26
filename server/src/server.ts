import express from "express";
import cors from "cors";
import { ChatVertexAI } from "@langchain/google-vertexai";
import { BaseLanguageModelInput } from "@langchain/core/language_models/base";
import { GoogleVertexAIEmbeddings } from "@langchain/community/embeddings/googlevertexai";
import { MongoDBAtlasVectorSearch } from "@langchain/mongodb";

import { config } from "./config.js";
import { connectToDatabase, collections } from "./database.js";


const app = express();
app.use(cors());

const router = express.Router();
router.use(express.json());

router.get("/", async (_, res) => {
  res.send("Welcome to the Insurance Chatbot API! 🤖");
});

// Initialize the conversational Vertex AI model
const model = new ChatVertexAI({
  // We will use the Gemini 1.5 Pro model
  model: "gemini-1.5-pro-001",
  // The maximum number of tokens to generate in the response
  maxOutputTokens: 2048,
  // The temperature parameter controls the randomness of the output — the higher the value, the more random the output
  temperature: 0.5,
  // The topP parameter controls the diversity of the output — the higher the value, the more diverse the output
  topP: 0.9,
  // The topK parameter controls the diversity of the output — the higher the value, the more diverse the output
  topK: 20,
});

// Store chat history, starting with the system message that the assistant is a helpful insurance policies assistant
const history: BaseLanguageModelInput = [
  [
      "system",
  `You are a knowledgeable and reliable insurance policies assistant. Provide only accurate and verified information related to insurance policies only in the language of the user's inquiry. Do not respond to irrelevant or nonsensical questions.

  Use any provided context about the user's insurance policies, such as coverage details, policy terms, and claim procedures, to ensure your responses are precise and pertinent. Do not mention that the context was used to generate the response. Include only information directly relevant to the user's inquiry.`
  ],
];

// Connect to the MongoDB Atlas database
await connectToDatabase();

// Initialize a MongoDB Atlas vector store with the specified configuration
const vectorStore = new MongoDBAtlasVectorSearch(
// Google Cloud Vertex AI's text embeddings model will be used for vectorizing the text chunks
new GoogleVertexAIEmbeddings(),
{
    collection: collections.context as any,
    // The name of the Atlas Vector Search index. You must create this in the Atlas UI.
    indexName: "vector_index",
    // The name of the collection field containing the raw content. Defaults to "text"
    textKey: "text",
    // The name of the collection field containing the embedded text. Defaults to "embedding"
    embeddingKey: "embedding",
}
);

// Initialize a retriever wrapper around the MongoDB Atlas vector store
const vectorStoreRetriever = vectorStore.asRetriever();


router.post("/messages", async (req, res) => {
  let message = req.body.text;
  if (!message) {
      return res.status(400).send({ error: 'Message is required' });
  }

  let prompt = `User question: ${message}.`;

  // If RAG is enabled, retrieve context from the MongoDB Atlas vector store
const rag = req.body.rag;
if (rag) {
    const context = await vectorStoreRetriever.invoke(message);

    if (context) {
        prompt += `

        Context:
        ${context?.map(doc => doc.pageContent).join("\n")}
        `;
    } else {
        console.error("Retrieval of context failed");
    }
}



  try {
      const modelResponse = await model.invoke([...history, prompt]);
      const textResponse = modelResponse?.content;

      if (!textResponse) {
          return res.status(500).send({ error: 'Model invocation failed.' });
      }

      history.push([
          "human",
          message
      ]);

      history.push([
          "assistant",
          textResponse
      ]);

      return res.send({ text: textResponse });
  } catch (e) {
      console.error(e);
      return res.status(500).send({ error: 'Model invocation failed.' });
  }
});


app.use(router);

// start the Express server
app.listen(config.server.port, () => {
  console.log(`Server running on port:${config.server.port}...`);
});
