<div align="center">
<h1 align="center">
<br>MONGO UNICORNS</h1>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white" alt="NodeJS" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind" />
<img src="https://img.shields.io/badge/Express-000000.svg?style=flat-square&logo=Express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat-square&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat-square&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/jasper-th-wang/mongo-unicorns?style=flat-square&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/jasper-th-wang/mongo-unicorns?style=flat-square&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/jasper-th-wang/mongo-unicorns?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/jasper-th-wang/mongo-unicorns?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents

- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [🎈 Demo](#-demo)
- [📂 repository Structure](#-repository-structure)
- [⚙️ Modules](#modules)
- [🚀 Getting Started](#-getting-started)
  - [🔧 Installation](#-installation)
  - [🤖 Running mongo-unicorns](#-running-mongo-unicorns)

---

## 📍 Overview

The Unicorn Data Service provides a web-based interface for users to query, filter, and sort information about unicorns. (Unicorns data provided from [The Little MongoDB Book](https://www.openmymind.net/2011/3/28/The-Little-MongoDB-Book/).)

Utilizing a combination of a frontend UI built with Tailwind and a backend server, it allows interaction with a MongoDB database storing unicorn data.

Features include a dynamic table for displaying results, multiple filter options, and sortable fields. Tailored for ease of use and customization, it's designed to deliver specific data on unicorns based on user preferences, with support for cross-origin requests. It's a user-friendly tool for accessing and visualizing unicorn information.

---

## 🎈 Demo

Here is the link to the live demo of this app deployed on Heroku:

https://mongo-unicorns-7e6fc0ffcea8.herokuapp.com/

---



## 📂 Repository Structure

```sh
└── mongo-unicorns/
    ├── frontend/
    │   ├── index.html
    │   └── script.js
    ├── package.json
    └── server.js

```

---

## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                                    | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [server.js](https://github.com/jasper-th-wang/mongo-unicorns/blob/main/server.js)       | The `server.js` script sets up an Express.js web server with a connected MongoDB database, using Mongoose to define and interact with unicorns data. It serves static files from the frontend directory and offers a RESTful API endpoint `/unicorns` to query and return unicorn data based on provided search parameters and sorting options. The server handles cross-origin requests, listens on a configurable port, and provides unicorns' validation through defined schema constraints.                                                                     |
| [package.json](https://github.com/jasper-th-wang/mongo-unicorns/blob/main/package.json) | The `package.json` file defines a node.js project named assignment3 with version 1.0.0, which serves as an API for a Unicorn service using Express and MongoDB. It is set up to start with `server.js` and lacks test specifications. The project uses packages `cors` for Cross-Origin Resource Sharing, `dotenv` for environment variable management, `express` as the web framework, and `mongoose` to interact with MongoDB. The required Node engine version is specified as 21.x. The project's main file is incorrectly listed as `playground-1.mongodb.js`. |

</details>

<details closed><summary>Frontend</summary>

| File                                                                                         | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [index.html](https://github.com/jasper-th-wang/mongo-unicorns/blob/main/frontend/index.html) | The HTML document is a user interface for querying and displaying data about unicorns, presumably from a MongoDB database given the directory name. It features a TailwindCSS-styled form enabling users to filter unicorns by name, date of birth, likes, weight, gender, vampire encounters, and vaccination status. Users can specify sorting preferences. Form submission triggers a JS function (referenced script.js). Results are displayed in a table where users can choose column visibility via checkboxes. Invalid input formats elicit error messages. |
| [script.js](https://github.com/jasper-th-wang/mongo-unicorns/blob/main/frontend/script.js)   | The code defines the functionality for an interactive web-based table that displays and filters data on unicorns. It retrieves unicorn data from a server according to user-specified filters, validates and sanitizes the sort input, and dynamically alters the visibility of table columns based on checkboxes. The table is refreshed with relevant data upon user request via a button click, and checkboxes control which columns are visible, allowing customizability of the displayed information.                                                         |

</details>

---

## 🚀 Getting Started

**_Dependencies_**

Please ensure you have the following dependencies installed on your system:

`- ℹ️ mongoose`

`- ℹ️ Express`

`- ℹ️ Nodemon`

### 🔧 Installation

1. Clone the mongo-unicorns repository:

```sh
git clone https://github.com/jasper-th-wang/mongo-unicorns
```

2. Change to the project directory:

```sh
cd mongo-unicorns
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running mongo-unicorns

```sh
nodemon server.js
```
