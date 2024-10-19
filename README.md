# ApiTestsJestSupertest
## Table of Contents
- [Project Overview](#project-overview)
- [Project Setup](#project-setup)
  - [1. Clone the Repository](#1-clone-the-reposiory)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Set Up Environment Variables](#3-set-up-environment-variables)
- [Running the Tests](#running-the-tests)
  - [1. Run All Tests](#1-run-all-tests)
- [Test Structure](#test-structure)

## Project Overview
This project contains end-to-end API tests for CRUD operations on the **GoRest API** using **Jest** and **Supertest**.

## Project Setup
### 1. Clone the Repository

Clone the repository to your local machine and navigate to the project directory:
```bash  
git clone https://github.com/haborysenko/ApiTestsJestSupertest.git  
cd ApiTestsJestSupertest
```

### 2. Install Dependencies
Make sure that all required dependencies are installed by running:
```bash  
npm install
```

This command will install all necessary Node.js packages, including **Jest** and **Supertest**, which are required to run the tests.

### 3. Set Up Environment Variables
You need to set up environment variables to authenticate with the **GoRest API**.

1. Create a `.env` file in the root directory of your project (if it doesn't already exist):
```bash  
touch .env
```

4. Add the following content to the `.env` file:
```bash  
GOREST_API_TOKEN=your_api_token_here  
GOREST_BASE_URL=https://gorest.co.in/public/v2
```

Replace `your_api_token_here` with your actual **GoRest API token**, which you can obtain by registering at [GoRest](https://gorest.co.in).

## Running the Tests
### 1. Run All Tests
To execute the entire test suite, run the following command:
```bash  
npm test
```

This will:
- Run all test cases located in the `tests/` directory.
- Validate the **CRUD operations** (Create, Read, Update, Delete) for user management.
- Ensure that the API responds correctly with the expected status codes and response data.

## Test Structure
The tests are structured to ensure reusability and maintainability:

- **`support/apiClient.js`**: Contains the reusable API client for making HTTP requests (GET, POST, PUT, DELETE).
- **`support/utils.js`**: Provides utility functions like generating unique emails and fetching environment variables.
- **`tests/`**: Contains all the CRUD tests for user operations on the GoRest API
