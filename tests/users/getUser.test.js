const apiClient = require("../../support/apiClient");
const utils = require("../../support/utils");

describe("when retrieving a user after creation", () => {
  let userId;

  const userName = "Mary Tos";
  const userEmail = utils.generateUniqueEmail();
  const userGender = "female";
  const userStatus = "active";

  beforeEach(async () => {
    const newUser = utils.createUser({
      name: userName,
      gender: userGender,
      email: userEmail,
      status: userStatus,
    });

    const response = await apiClient.post("/users", newUser);
    expect(response.statusCode).toBe(201);
    userId = response.body.id;
  });

  it("should retrieve the created user and verify all field values", async () => {
    const response = await apiClient.get(`/users/${userId}`);

    console.log("Retrieved user response:", response.body);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id", userId);
    expect(response.body).toHaveProperty("name", userName);
    expect(response.body).toHaveProperty("email", userEmail);
    expect(response.body).toHaveProperty("gender", userGender);
    expect(response.body).toHaveProperty("status", userStatus);
  });

  afterEach(async () => {
    await apiClient.delete(`/users/${userId}`);
  });
});
