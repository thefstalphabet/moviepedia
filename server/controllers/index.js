const registerController = require("./auth/register-controller");
const loginController = require("./auth/login-controller");
const meController = require("./auth/me-controller");
const movieController = require("./movie-controller");
const userController = require("./user-controller");

module.exports = {
  registerController,
  loginController,
  meController,
  movieController,
  userController
};
