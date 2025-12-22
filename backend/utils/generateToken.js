const jwt = require("jsonwebtoken");

/**
 * Generate JWT Token
 * @param {String} userId - MongoDB User ID
 * @param {String} role - user role (citizen | officer | admin)
 * @returns {String} JWT token
 */
const generateToken = (userId, role) => {
  return jwt.sign(
    {
      id: userId,
      role: role
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h" // token zai ƙare bayan awa 1
    }
  );
};

module.exports = generateToken;