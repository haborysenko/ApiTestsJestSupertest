const apiClient = require("../../support/apiClient");
const utils = require("../../support/utils");

describe("when creating a new user", () => {
  let userId;

  const userName = "Mary Tos";
  const userEmail = utils.generateUniqueEmail();
  const userGender = "female";
  const userStatus = "active";

  it("should successfully create a new user and verify all field values", async () => {
    const newUser = utils.createUser({
      name: userName,
      gender: userGender,
      email: userEmail,
      status: userStatus,
    });

    const response = await apiClient.post("/users", newUser);

    console.log("Created user response:", response.body);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name", newUser.name);
    expect(response.body).toHaveProperty("email", newUser.email);
    expect(response.body).toHaveProperty("gender", newUser.gender);
    expect(response.body).toHaveProperty("status", newUser.status);
    userId = response.body.id;
  });

  afterEach(async () => {
    await apiClient.delete(`/users/${userId}`);
  });
});
