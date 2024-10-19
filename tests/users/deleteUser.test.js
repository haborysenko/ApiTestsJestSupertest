const apiClient = require("../../support/apiClient");
const utils = require("../../support/utils");

describe("when deleting a user", () => {
  let userId;

  beforeEach(async () => {
    const defaultUser = utils.createUser();

    const response = await apiClient.post("/users", defaultUser);

    expect(response.statusCode).toBe(201);
    userId = response.body.id;
  });

  it("should delete the created user and verify it no longer exists", async () => {
    // Verify user is deleted successfully
    const deleteResponse = await apiClient.delete(`/users/${userId}`);
    expect(deleteResponse.statusCode).toBe(204);

    // Verify user no longer exists
    const getResponse = await apiClient.get(`/users/${userId}`);
    expect(getResponse.statusCode).toBe(404); 
  });

  afterEach(async () => {
    await apiClient.delete(`/users/${userId}`); 
  });
});
