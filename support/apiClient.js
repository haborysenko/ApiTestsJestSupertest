const request = require("supertest");
require("dotenv").config();

class ApiClient {
  constructor() {
    /**
     * Base URL for the API, loaded from environment variables or defaults to GoRest API.
     * @type {string}
     */
    this.baseUrl =
      process.env.GOREST_BASE_URL || "https://gorest.co.in/public/v2";
    
    /**
     * Bearer token for authentication, loaded from environment variables.
     * @type {string}
     */
    this.token = `Bearer ${process.env.GOREST_API_TOKEN}`;
  }

  /**
   * Adds Authorization headers to the request.
   * @param {object} req - The Supertest request object.
   * @returns {object} The request object with Authorization header set.
   */
  setAuthHeaders(req) {
    return req.set("Authorization", this.token);
  }

  /**
   * Sends a GET request to the specified API path.
   * @param {string} path - The API endpoint path (e.g., `/users`).
   * @returns {Promise<object>} The Supertest request object with GET method.
   */
  get(path) {
    return this.setAuthHeaders(request(this.baseUrl).get(path));
  }

  /**
   * Sends a POST request to the specified API path with a request body.
   * @param {string} path - The API endpoint path (e.g., `/users`).
   * @param {object} body - The request body (e.g., new user data).
   * @returns {Promise<object>} The Supertest request object with POST method.
   */
  post(path, body) {
    return this.setAuthHeaders(request(this.baseUrl).post(path).send(body));
  }

  /**
   * Sends a PUT request to the specified API path with a request body.
   * @param {string} path - The API endpoint path (e.g., `/users`).
   * @param {object} body - The request body with updated data.
   * @returns {Promise<object>} The Supertest request object with PUT method.
   */
  put(path, body) {
    return this.setAuthHeaders(request(this.baseUrl).put(path).send(body));
  }

  /**
   * Sends a DELETE request to the specified API path.
   * @param {string} path - The API endpoint path (e.g., `/users/{id}`).
   * @returns {Promise<object>} The Supertest request object with DELETE method.
   */
  delete(path) {
    return this.setAuthHeaders(request(this.baseUrl).delete(path));
  }
}

module.exports = new ApiClient();
