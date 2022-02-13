const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares");

// controllers imports
const {
  registerController,
  loginController,
  meController,
  movieController,
  userController,
} = require("../controllers");

// auth
router.post("/register", registerController.register);
router.post("/login", loginController.login);
router.get("/me", auth, meController.me);

// movie
router.post("/movie", auth, movieController.store);
router.delete("/movie", auth, movieController.throw);

// user
router.post("/avatar", auth, userController.avatar);

module.exports = router;
