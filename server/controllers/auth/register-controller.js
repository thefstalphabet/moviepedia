const { CustomErrorHandler } = require("../../services");
const { User } = require("../../models");
const Joi = require("joi");
const bcrypt = require("bcrypt");

const registerController = {
  async register(req, res, next) {
    // validating the request
    const registerSchema = Joi.object({
      name: Joi.string().min(2).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      conformPassword: Joi.ref("password"),
    });
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return next(error);
    }

    // checking whether user exists or not
    try {
      const exist = await User.findOne({
        email: req.body.email,
      });
      if (exist) {
        return next(
          CustomErrorHandler.alreadyExists("This email is already taken")
        );
      }
    } catch (err) {
      return next(err);
    }

    // hashing the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // prepare the model
    const { name, email } = req.body;
    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    await user.save();
    res.json({ message: "Registered sucessfully" });
  },
};

module.exports = registerController;
