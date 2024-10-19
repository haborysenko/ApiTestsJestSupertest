class Utils {
    // Generate a unique email
    generateUniqueEmail(prefix = "user") {
      const randomNumber = Math.floor(Math.random() * 1000);
      return `${prefix}${randomNumber}@example.com`;
    }
  
    // Get environment variable or return default value
    getEnvVariable(key, defaultValue = "") {
      return process.env[key] || defaultValue;
    }
  }
  
  module.exports = new Utils();  