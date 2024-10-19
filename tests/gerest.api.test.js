const utils = require('../support/utils');
const apiClient = require("../support/apiClient");

describe("When performing CRUD operations on a user", () => {
  let userId;

  // User data for create
  const userName = "Maty Loe";
  const userGender = "male";
  const userEmail = utils.generateUniqueEmail("maty");
  const userStatus = "active";

  // User data for update
  const updatedName = "Jane Doe";
  const updatedEmail = utils.generateUniqueEmail("updated_maty");
  const updatedGender = "female";
  const updatedStatus = "inactive";

  it("should create a new user and verify all field values", async () => {
    const newUser = {
      name: userName,
      gender: userGender,
      email: userEmail,
      status: userStatus,
    };

    const response = await apiClient.post("/users", newUser);

    console.log("Created user response:", response.body);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(typeof response.body.id).toBe("number");
    expect(response.body).toHaveProperty("name", userName);
    expect(response.body).toHaveProperty("email", userEmail);
    expect(response.body).toHaveProperty("gender", userGender);
    expect(response.body).toHaveProperty("status", userStatus);

    // Save userId for further tests
    userId = response.body.id;
  });

  it("should retrieve the created user and verify all field values", async () => {
    const response = await apiClient.get(`/users/${userId}`);

    console.log("Get Created user response:", response.body);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id", userId);
    expect(response.body).toHaveProperty("name", userName);
    expect(response.body).toHaveProperty("email", userEmail);
    expect(response.body).toHaveProperty("gender", userGender);
    expect(response.body).toHaveProperty("status", userStatus);
  });

  it("should update all user fields and verify the updated field values", async () => {
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

  it("should retrieve the updated user and verify all updated field values", async () => {
    const response = await apiClient.get(`/users/${userId}`);

    console.log("Get Updated user response:", response.body);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id", userId);
    expect(response.body).toHaveProperty("name", updatedName); 
    expect(response.body).toHaveProperty("email", updatedEmail);  
    expect(response.body).toHaveProperty("gender", updatedGender); 
    expect(response.body).toHaveProperty("status", updatedStatus); 
  });

  it("should delete the user", async () => {
    const response = await apiClient.delete(`/users/${userId}`);

    expect(response.statusCode).toBe(204);
  });

  it("should verify the user is no longer available by returning 404 on retrieval", async () => {
    const response = await apiClient.get(`/users/${userId}`);

    expect(response.statusCode).toBe(404); 
  });
});
