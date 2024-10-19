class Utils {
    // Get environment variable or return default value
    getEnvVariable(key, defaultValue = "") {
      return process.env[key] || defaultValue;
    }
  
    // Generate a unique email
    generateUniqueEmail() {
      const randomNumber = Math.floor(Math.random() * 1000);
      return `email${randomNumber}@example.com`;
    }
  
    // Create user with optional parameters
    createUser({
      name = "FirstName LastName",
      gender = "male",
      email = this.generateUniqueEmail(),
      status = "active",
    } = {}) {
      return {
        name,
        gender,
        email,
        status,
      };
    }
  }
  
  module.exports = new Utils();
  