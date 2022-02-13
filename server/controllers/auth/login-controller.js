const { User } = require("../../models");
const { JwtService, CustomErrorHandler } = require("../../services");
const Joi = require("joi");
const bcrypt = require("bcrypt");

const loginController = {
  async login(req, res, next) {
    // validating the request
    const loginSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return next(error);
    }

    // finding the user
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return next(CustomErrorHandler.worngCredentials());
      }
      // comparing the password
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) {
        return next(CustomErrorHandler.worngCredentials());
      }
      // generating access token
      const access_token = JwtService.sign({
        _id: user._id,
        email: user.email,
      });

      res.json({ access_token });
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = loginController;
