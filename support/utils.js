class Utils {
    /**
     * Get environment variable or return default value.
     * @param {string} key - The name of the environment variable.
     * @param {string} [defaultValue=""] - The default value to return if the environment variable is not found.
     * @returns {string} The value of the environment variable or the default value.
     */
    getEnvVariable(key, defaultValue = "") {
      return process.env[key] || defaultValue;
    }
  
    /**
     * Generate a unique email address.
     * @returns {string} A unique email address in the format 'emailXXX@example.com' where XXX is a random number.
     */
    generateUniqueEmail() {
      const randomNumber = Math.floor(Math.random() * 1000);
      return `email${randomNumber}@example.com`;
    }
  
    /**
     * Create a user object with optional parameters.
     * @param {object} [options={}] - The user information.
     * @param {string} [options.name="FirstName LastName"] - The name of the user.
     * @param {string} [options.gender="male"] - The gender of the user.
     * @param {string} [options.email=this.generateUniqueEmail()] - The email of the user. A unique email will be generated by default.
     * @param {string} [options.status="active"] - The status of the user.
     * @returns {object} A user object with name, gender, email, and status fields.
     */
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
  