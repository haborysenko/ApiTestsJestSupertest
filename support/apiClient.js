const request = require("supertest");
require("dotenv").config(); 

class ApiClient {
  constructor() {
    // Load environment variables
    this.baseUrl = process.env.GOREST_BASE_URL || "https://gorest.co.in/public/v2";
    this.token = `Bearer ${process.env.GOREST_API_TOKEN}`;
  }

  // Common method to add the Authorization header
  setAuthHeaders(req) {
    return req.set("Authorization", this.token);
  }

  get(path) {
    return this.setAuthHeaders(request(this.baseUrl).get(path));
  }

  post(path, body) {
    return this.setAuthHeaders(request(this.baseUrl).post(path).send(body));
  }

  put(path, body) {
    return this.setAuthHeaders(request(this.baseUrl).put(path).send(body));
  }

  delete(path) {
    return this.setAuthHeaders(request(this.baseUrl).delete(path));
  }
}

module.exports = new ApiClient();
