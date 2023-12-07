[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13114444&assignment_repo_type=AssignmentRepo)

# Building a Unicorn API with Express, MongoDB, and Frontend Interaction

Develop a functional RESTful API using Node.js, Express framework, and MongoDB for managing a database of unicorns.
Additionally, create a frontend interface that interacts with the API for querying and displaying unicorn data.

## **Requirements**

1. **Backend Server:**
    * Implement an Express server to handle HTTP requests and responses for the Unicorn API.
    * Utilize MongoDB as the database and Mongoose as the ODM for managing unicorn data. Use MongoDB Atlas for hosting
      the database.
    * Define API endpoints to enable querying and retrieving unicorn data based on specified parameters.
2. **Frontend Interface:**
    * Develop an HTML/CSS/JavaScript frontend interface for interacting with the Unicorn API.
    * Design input fields for filtering unicorn attributes such
      as `nameElement`, `lovesElement`, `weightElement`, `genderElement`, `vampires`, `vaccinatedElement`.
    * Provide a sorting option for specifying the order of retrieved unicorn data.
    * Display unicorn data in a tabular format based on the queried attributes.
3. **Client-Server Interaction:**
    * Implement JavaScript functions to handle user input and make API requests to the backend server.
    * Ensure the frontend sends appropriate query parameters to the backend based on user input for filtering and
      sorting unicorns.
    * Display the retrieved unicorn data in a table dynamically on the frontend interface.
4. **Validation and Error Handling:**
    * Implement input validation on the frontend to ensure proper data types and formats before making API requests.
    * Handle errors gracefully both on the frontend and backend, providing meaningful error messages in case of invalid
      requests or server errors.
5. **Integration Testing:**
    * Validate the functionality of the frontend by testing various scenarios, including different query combinations
      and edge cases.
    * Verify that the frontend accurately displays unicorn data based on applied filters and sorting options.

## The Unicorn API

**Retrieving Unicorn Data:**

* **Endpoint:** `/unicorns`
* **HTTP Method:** `GET`

**Query Parameters:**

* **Filtering Parameters:**

    * `nameElement`: Filter unicorns by nameElement.
    * `dobElement`: Filter by date of birth.
    * `lovesElement`: Filter by things the unicorn lovesElement.
    * `weightGreaterThan`: Filter unicorns weighing more than a specified value.
    * `vampiresGreaterThan`: Filter unicorns with more vampireElement encounters.
    * `vaccinatedElement`: Filter vaccinatedElement or non-vaccinatedElement unicorns.
    * `vampiresExists`: Filter unicorns based on whether they have encountered vampires.
    * `weightLessThan`: Filter unicorns weighing less than a specified value.
    * `genderElement`: Filter by unicorn genderElement (excluding 'other').
* **Sorting Parameter:**

    * `sort`: Sort the retrieved unicorns by specific attributes and order. (
      e.g., `sort=nameElement.asc,weightElement.desc`)

**Example Queries:**

1. **Retrieve all unicorns:**
    * `GET /unicorns`
    * **Expected Response:** Returns all unicorn data available in the database.
2. **Filter unicorns by nameElement:**
    * `GET /unicorns?nameElement=Roooooodles`
    * **Expected Response:** Retrieves unicorn(s) with the nameElement "Roooooodles".
3. **Filter by lovesElement and weightElement:**
    * `GET /unicorns?lovesElement=rainbows&weightGreaterThan=100`
    * **Expected Response:** Retrieves unicorns that love rainbows and weigh over 100 units.
4. **Filter and sort unicorns:**
    * `GET /unicorns?genderElement=female&sort=nameElement.asc`
    * **Expected Response:** Retrieves female unicorns sorted by nameElement in ascending order.
5. **Filter vaccinatedElement unicorns with vampireElement encounters:**
    * `GET /unicorns?vaccinatedElement=true&vampiresExists=true`
    * **Expected Response:** Retrieves vaccinatedElement unicorns that have encountered vampires.

**Note:** Ensure that the server returns appropriate HTTP status codes for different scenarios (e.g., 200 for successful
responses, 400 for bad requests, 404 for not found, etc.).

## Marking Scheme

### Backend (40%)

1. **Express Server Setup** (5%)
    - Proper setup and configuration of Express server to handle HTTP requests.

2. **MongoDB and Mongoose Integration** (10%)
    - Use of MongoDB Atlas for hosting the database.
    - Proper implementation of Mongoose schema and model for unicorn data.

3. **API Endpoints** (10%)
    - Implementation of `/unicorns` endpoint for retrieving unicorn data with query parameters.
    - Handling of various query parameters for filtering and sorting.

4. **Error Handling and Status Codes** (10%)
    - Proper handling of errors (both frontend and backend) with appropriate HTTP status codes for different scenarios.

### Frontend (60%)

1. **Interface Design and Interaction** (20%)
    - Design and layout of frontend elements (input fields, buttons, table) following provided guidelines.
    - Interactive features for filtering and sorting unicorns based on user input.

2. **Client-Server Communication** (20%)
    - JavaScript functions handling user input and making API requests to the backend server.
    - Proper construction of query parameters based on user input.

3. **Data Display** (20%)
    - Dynamic display of unicorn data in a tabular format based on queried attributes.
    - Toggle options for attribute visibility using checkboxes.

You will penalized for missing deliverables, late submissions, and poor code quality.

## Deliverables

1. Submit a link to your GitHub repository.
2. Submit a link to YT video demo of your project. The video should be 2-3 minutes long and include a walkthrough of
   your code and a demo of your project.



