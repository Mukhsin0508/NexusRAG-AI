<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">NEXUSRAG-AI</h1>
</p>
<p align="center">
    <em>Seamless Tunneling for Enhanced Network Access: NexusRAG-AI</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/Mukhsin0508/NexusRAG-AI.git?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Mukhsin0508/NexusRAG-AI.git?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Mukhsin0508/NexusRAG-AI.git?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Mukhsin0508/NexusRAG-AI.git?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/EditorConfig-FEFEFE.svg?style=flat&logo=EditorConfig&logoColor=black" alt="EditorConfig">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/Nodemon-76D04B.svg?style=flat&logo=Nodemon&logoColor=white" alt="Nodemon">
	<img src="https://img.shields.io/badge/MongoDB-47A248.svg?style=flat&logo=MongoDB&logoColor=white" alt="MongoDB">
	<br>
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Docker-2496ED.svg?style=flat&logo=Docker&logoColor=white" alt="Docker">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running NexusRAG-AI](#-running-NexusRAG-AI)
>   - [🧪 Tests](#-tests)
> - [🛠 Project Roadmap](#-project-roadmap)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)
> - [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

NexusRAG-AI project facilitates seamless API communication through a secure tunnel established by `create-tunnel.js`, enhancing network access. It maintains configuration integrity, validating environment variables via `check-env.js`, ensuring reliable development across components. Structuring Firebase hosting configurations via `client/.firebaserc` assigns hosting targets effectively. The Angular-based frontend's UI rendering in `client/src/app/chat` boosts user interaction. This project's core value lies in optimizing network connectivity and environment setup for efficient development workflows.

---

## 📦 Features

|    |   Feature         | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | The project appears to be an Angular application with a Node.js backend using Express and MongoDB. It follows a client-server architecture with an emphasis on scalable and responsive design. The architecture seems robust and scalable for web applications. |
| 🔩 | **Code Quality**  | The code quality seems decent with proper use of TypeScript, Angular best practices, and clean Express.js backend. However, there is room for improvement in terms of consistent coding styles and documentation. |
| 📄 | **Documentation** | The project lacks extensive documentation. Some code snippets are documented, but overall, there is a need for more comprehensive documentation covering setup, usage, and architecture details. Improved documentation would enhance developer onboarding and maintenance. |
| 🔌 | **Integrations**  | Key integrations include Angular Material, Firebase, MongoDB, and Langchain libraries for AI functionalities. External dependencies for testing and development include Jasmine, Karma, and localtunnel. Proper integration with external services and libraries is evident. |
| 🧩 | **Modularity**    | The codebase seems moderately modular with separate client and server components. However, there is room for further modularization and better separation of concerns to enhance code reusability and maintainability. Improved modularity would facilitate easier code maintenance and future enhancements. |
| 🧪 | **Testing**       | The project incorporates testing frameworks like Jasmine and Karma for unit and integration testing. Adequate testing is crucial for ensuring code quality and reliability. However, the test coverage could be improved to achieve higher confidence in the codebase. |
| ⚡️  | **Performance**   | Performance evaluation requires further analysis since no specific details are provided in the repository content. Efficient resource utilization and optimization techniques can enhance the project's performance, especially as the application scales. Monitoring and profiling tools are recommended for performance optimization. |
| 🛡️ | **Security**      | Security measures such as CORS handling, environment setup validation, and secure tunneling are evident in the repository. However, additional security features like data encryption, input validation, and authentication mechanisms could further enhance data protection and access control. |
| 📦 | **Dependencies**  | Key external dependencies include Angular libraries, MongoDB, Express, Firebase, and various testing frameworks. Managing dependencies efficiently and keeping them updated is essential to ensure the project's stability and security. Regular dependency audits are recommended. |
| 🚀 | **Scalability**   | The project demonstrates potential for scalability with its use of Angular, Express, and MongoDB technologies. However, scalability testing and optimization strategies need to be implemented to handle increased traffic and load effectively. Scalability is crucial for accommodating growth and ensuring a seamless user experience. |


---

## 📂 Repository Structure

```sh
└── NexusRAG-AI/
    ├── README.md
    ├── check-env.js
    ├── client
    │   ├── .editorconfig
    │   ├── .firebaserc
    │   ├── .gitignore
    │   ├── .vscode
    │   │   ├── extensions.json
    │   │   ├── launch.json
    │   │   └── tasks.json
    │   ├── README.md
    │   ├── angular.json
    │   ├── firebase.json
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── src
    │   │   ├── app
    │   │   │   ├── app.component.html
    │   │   │   ├── app.component.scss
    │   │   │   ├── app.component.ts
    │   │   │   ├── app.config.ts
    │   │   │   ├── app.routes.ts
    │   │   │   ├── chat
    │   │   │   │   ├── chat.component.html
    │   │   │   │   ├── chat.component.scss
    │   │   │   │   └── chat.component.ts
    │   │   │   └── home
    │   │   │       ├── home.component.html
    │   │   │       ├── home.component.scss
    │   │   │       └── home.component.ts
    │   │   ├── assets
    │   │   │   ├── .gitkeep
    │   │   │   ├── bot-avatar.png
    │   │   │   ├── fonts
    │   │   │   │   ├── EuclidCircularA-Medium-WebXL.woff2
    │   │   │   │   ├── EuclidCircularA-Regular-WebXL.woff2
    │   │   │   │   ├── MongoDBValueSerif-Bold.woff2
    │   │   │   │   ├── MongoDBValueSerif-Medium.woff2
    │   │   │   │   ├── MongoDBValueSerif-Regular.woff2
    │   │   │   │   ├── SourceCodePro-Medium.ttf
    │   │   │   │   └── SourceCodePro-Regular.ttf
    │   │   │   ├── human-avatar.png
    │   │   │   └── loading-icon.gif
    │   │   ├── config.ts
    │   │   ├── favicon.ico
    │   │   ├── index.html
    │   │   ├── main.ts
    │   │   └── styles.scss
    │   ├── tsconfig.app.json
    │   ├── tsconfig.json
    │   └── tsconfig.spec.json
    ├── create-tunnel.js
    ├── package-lock.json
    ├── package.json
    └── server
        ├── .gitignore
        ├── Dockerfile
        ├── nodemon.json
        ├── package-lock.json
        ├── package.json
        ├── pdf_documents
        │   ├── bilforsakring-summary-english.pdf
        │   ├── home-insurance-summary-english.pdf
        │   └── sjuk-olycksfallsforsakring-summary-english.pdf
        ├── src
        │   ├── config.ts
        │   ├── database.ts
        │   ├── embed-documents.ts
        │   └── server.ts
        └── tsconfig.json
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File                                                                                              | Summary                                                                                                                                                                                                                                    |
| ---                                                                                               | ---                                                                                                                                                                                                                                        |
| [create-tunnel.js](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/create-tunnel.js)   | Code Summary:** `create-tunnel.js` establishes a secure tunnel for API communication. It dynamically updates the frontend's configuration with the tunnel URL. Key feature: seamless integration of tunneling for improved network access. |
| [package.json](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/package.json)           | Code snippet in check-env.js ensures proper environment setup in NexusRAG-AI repo, maintaining configuration integrity. It validates environment variables for seamless development across project components.                             |
| [check-env.js](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/check-env.js)           | Code snippet in `check-env.js` validates environment before running tasks in NexusRAG-AI repo, ensuring data integrity and task reliability.                                                                                               |
| [package-lock.json](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/package-lock.json) | Code snippet: **check-env.js**Summary: Validates environment configuration for the NexusRAG-AI project. Ensures proper setup for seamless execution within the repository architecture.                                                    |

</details>

<details closed><summary>client</summary>

| File                                                                                                       | Summary                                                                                                                                                                                                                            |
| ---                                                                                                        | ---                                                                                                                                                                                                                                |
| [.firebaserc](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/.firebaserc)               | Code Summary**:File `client/.firebaserc` configures Firebase project targets, assigning hosting for `mdb-chatbot` within `atlas-ai-demos`. Crucial for structuring Firebase hosting configurations in the repository architecture. |
| [tsconfig.json](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/tsconfig.json)           | Code snippet in `client/src/app/chat` handles chat component UI rendering, enhancing user interaction in NexusRAG-AI repository's Angular-based frontend architecture.                                                             |
| [tsconfig.app.json](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/tsconfig.app.json)   | Code Summary:**`client/tsconfig.app.json` steers Angular compilation in the app, defining outDir and file inclusions for enhanced build settings within the NexusRAG-AI project.                                                   |
| [.editorconfig](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/.editorconfig)           | Code Summary:** `client/.editorconfig` enforces unified coding conventions for the client-side Angular project in `NexusRAG-AI`. Maintains consistent formatting across files for better code readability.                         |
| [tsconfig.spec.json](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/tsconfig.spec.json) | Code Snippet Summary:****Role:** Client-side TypeScript configuration for Angular app's specs.**Features:** Specifies compiler options and paths for testing.                                                                      |
| [angular.json](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/angular.json)             | Code snippet: `app.routes.ts`Summary: Navigate between app pages efficiently. Implements routing for app components ensuring smooth transitions. Crucial for user experience and app flow within NexusRAG-AI repository structure. |
| [package.json](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/package.json)             | Code snippet `check-env.js` in `NexusRAG-AI` enforces environment variable validation, critical for reliable application configuration. It ensures necessary variables are present before the app runs, maintaining stability.     |
| [firebase.json](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/firebase.json)           | Code snippet in `firebase.json` configures Firebase hosting for chatbot target within the NexusRAG-AI parent repository. It defines hosting settings specific to the chatbot, part of the Angular client architecture.             |
| [package-lock.json](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/package-lock.json)   | Code Snippet Summary:**Manages environment configuration for NexusRAG-AI network, ensuring seamless deployment across various infrastructure setups. Crucial for maintaining consistent operation in diverse environments.         |

</details>

<details closed><summary>client.src</summary>

| File                                                                                             | Summary                                                                                                                                                                                                                 |
| ---                                                                                              | ---                                                                                                                                                                                                                     |
| [styles.scss](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/src/styles.scss) | Code snippet role: `check-env.js` validates environment setup. Key feature-ensures correct configuration for application operation. Maintains reliability of app functionality within NexusRAG-AI repository structure. |
| [index.html](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/src/index.html)   | Code snippet in client/src/index.html sets up the basic structure and styling for NexusRAG-AI bank assistant web app. It includes metadata, title, favicon, and links to fonts and icons.                               |
| [config.ts](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/src/config.ts)     | Code snippet in client/src/config.ts sets the backend URL to https://fcf5-34-90-73-142.ngrok-free.app, critical for client-server communication in NexusRAG-AI repository's architecture.                               |
| [main.ts](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/src/main.ts)         | Code Summary:**In `client/src/main.ts`, this snippet initializes the Angular application by bootstrapping the main component using specified configurations from `app/app.config`. Error handling is also included.     |

</details>

<details closed><summary>client.src.app</summary>

| File                                                                                                               | Summary                                                                                                                                                                                                               |
| ---                                                                                                                | ---                                                                                                                                                                                                                   |
| [app.component.ts](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/src/app/app.component.ts)     | Code snippet in client/src/app/app.component.ts defines the main app component in Angular for the NexusRAG-AI repository. It manages routing and UI display with templateUrl and styleUrl settings.                   |
| [app.component.scss](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/src/app/app.component.scss) | Summary:**Code snippet in `client/src/app/app.component.scss` sets styling for a page container with specific dimensions in NexusRAG-AI repository's Angular frontend architecture.                                   |
| [app.config.ts](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/src/app/app.config.ts)           | Summary:**The code in `client/src/app/app.config.ts` configures routing, animations, and markdown for the Angular client app in the NexusRAG-AI repository. It sets up key providers essential for app functionality. |
| [app.routes.ts](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/src/app/app.routes.ts)           | Code Summary:**In `client/src/app/app.routes.ts`, this code defines routes using Angular for navigating to the Home component within the NexusRAG-AI repository's client application architecture.                    |
| [app.component.html](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/src/app/app.component.html) | Code snippet in `app.component.html` displays the main content using Angular router within the page container in the client-side application.                                                                         |

</details>

<details closed><summary>client.src.app.home</summary>

| File                                                                                                                      | Summary                                                                                                                                                                                                                    |
| ---                                                                                                                       | ---                                                                                                                                                                                                                        |
| [home.component.html](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/src/app/home/home.component.html) | Code Summary:**The code snippet in client/src/app/home/home.component.html includes a reference to the <app-chat> component. This integration allows seamless communication features within the application's home module. |
| [home.component.ts](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/src/app/home/home.component.ts)     | Code snippet in `home.component.ts` organizes home component in Angular app, importing and configuring `ChatComponent`. Enhances modularity and UX by integrating chat feature seamlessly.                                 |
| [home.component.scss](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/src/app/home/home.component.scss) | Code Snippet Summary:**Home component styles for NexusRAG-AI client app. Defines visual layout and design elements. Integrates with app's UI/UX.                                                                           |

</details>

<details closed><summary>client.src.app.chat</summary>

| File                                                                                                                      | Summary                                                                                                                                                                                                                                              |
| ---                                                                                                                       | ---                                                                                                                                                                                                                                                  |
| [chat.component.ts](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/src/app/chat/chat.component.ts)     | Code snippet in check-env.js verifies environment configurations, ensuring secure and reliable application setup. Maintains consistency across NexusRAG-AI repository, enhancing overall system stability and deployment reliability.                |
| [chat.component.html](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/src/app/chat/chat.component.html) | Code snippet: `app.config.ts`Summary: Manages global configuration settings for NexusRAG-AI client app, ensuring consistent behavior and easy maintenance across app components.Key role: Centralized config management.                             |
| [chat.component.scss](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/client/src/app/chat/chat.component.scss) | Code snippet: `app.routes.ts`Summary: Manages routing for the Angular web app in NexusRAG-AI repository. Organizes navigation paths and components for cohesive user experience. Integrates app features seamlessly within the Angular architecture. |

</details>

<details closed><summary>server</summary>

| File                                                                                                     | Summary                                                                                                                                                                                                                                 |
| ---                                                                                                      | ---                                                                                                                                                                                                                                     |
| [Dockerfile](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/server/Dockerfile)               | Code Summary:**In `server/Dockerfile`, the code builds a Node.js project in a container based on node:20-slim image. It installs dependencies, builds the project, and runs a web service.                                              |
| [tsconfig.json](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/server/tsconfig.json)         | Code snippet in server/tsconfig.json: Configures TypeScript compiler options for the server module, enabling ESNext features, strict typing, and module resolution for Node.js. Supports source maps and custom paths for node_modules. |
| [package.json](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/server/package.json)           | Code Summary:** `check-env.js` validates environment dependencies & configurations for `NexusRAG-AI` project. Crucial for ensuring seamless setup & operation. Key part of architectural stability & reliability.                       |
| [nodemon.json](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/server/nodemon.json)           | nodemon.json** in **server** ensures live reloading of TypeScript files listed in **src**, triggering **npm run start:tsx** command for enhanced development in the **NexusRAG-AI** repository.                                         |
| [package-lock.json](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/server/package-lock.json) | Code snippet in `check-env.js` manages environment variables for `NexusRAG-AI` repository. Enables dynamic configuration based on deployment environment, enhancing flexibility and security.                                           |

</details>

<details closed><summary>server.src</summary>

| File                                                                                                           | Summary                                                                                                                                                                                           |
| ---                                                                                                            | ---                                                                                                                                                                                               |
| [server.ts](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/server/src/server.ts)                   | Code snippet in `check-env.js` validates and ensures correct environment setup for NexusRAG-AI repository. Critical for maintaining consistent and reliable development environment.              |
| [embed-documents.ts](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/server/src/embed-documents.ts) | Code snippet: `app.config.ts`Summary: Centralizes application configuration settings for seamless maintenance and organization in the NexusRAG-AI repository architecture.                        |
| [config.ts](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/server/src/config.ts)                   | Code in `server/src/config.ts` sets MongoDB URI and server port for the `NexusRAG-AI` repository. It centralizes environment variable loading and configuration for database and server settings. |
| [database.ts](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/master/server/src/database.ts)               | Code Summary:** `server/src/database.ts` connects to MongoDB, initializing `context` collection. Manages text chunks, embedding, and metadata. Facilitates data storage for NexusRAG-AI server.   |

</details>

---

## 🚀 Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **JSON**: `version x.y.z`

### ⚙️ Installation

1. Clone the NexusRAG-AI repository:

```sh
git clone https://github.com/Mukhsin0508/NexusRAG-AI.git
```

2. Change to the project directory:

```sh
cd NexusRAG-AI
```

3. Install the dependencies:

```sh
> INSERT-INSTALL-COMMANDS
```

### 🤖 Running NexusRAG-AI

Use the following command to run NexusRAG-AI:

```sh
> INSERT-RUN-COMMANDS
```

### 🧪 Tests

To execute tests, run:

```sh
> INSERT-TEST-COMMANDS
```

---

## 🛠 Project Roadmap

- [X] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---
## Contributors ✨

This demo is inspired by the [Chat Application with RAG Feature Toggle and Backend Server](https://github.com/voxic/GCP_RAG_Chatbot/tree/main).

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center">
        <a href="https://www.linkedin.com/in/muxsin-muxtorov-58b26221b/">
            <img src="https://x.com/MukhsinMM7/photo" width="100px;" alt=""/><br />
            <sub><b>Mukhsin Mukhtorov</b></sub>
        </a><br />
    </td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->


## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/Mukhsin0508/NexusRAG-AI.git/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/Mukhsin0508/NexusRAG-AI.git/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/Mukhsin0508/NexusRAG-AI.git/issues)**: Submit bugs found or log feature requests for Nexusrag-ai.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/Mukhsin0508/NexusRAG-AI.git
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This project is protected under the --- **[Mozilla Public License Version 2.0](https://choosealicense.com/licenses/mpl-2.0/#)

---

## 👏 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---
