const apiClient = require("../../support/apiClient");
const utils = require("../../support/utils");

describe("when updating a user", () => {
  let userId;

  const updatedName = "Jane Smith";
  const updatedEmail = utils.generateUniqueEmail();
  const updatedGender = "female";
  const updatedStatus = "inactive";

  beforeEach(async () => {
    const defaultUser = utils.createUser({
    });

    const response = await apiClient.post("/users", defaultUser);

    expect(response.statusCode).toBe(201);
    userId = response.body.id;
  });

  it("should update all user fields and verify updated values", async () => {
    const updatedUser = {
      name: updatedName,
      email: updatedEmail,
      gender: updatedGender,
      status: updatedStatus,
    };

    const response = await apiClient.put(`/users/${userId}`, updatedUser);

    console.log("Updated user response:", response.body);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id", userId);
    expect(response.body).toHaveProperty("name", updatedName);
    expect(response.body).toHaveProperty("email", updatedEmail);
    expect(response.body).toHaveProperty("gender", updatedGender);
    expect(response.body).toHaveProperty("status", updatedStatus);
  });

  afterEach(async () => {
      await apiClient.delete(`/users/${userId}`);
  });
});
