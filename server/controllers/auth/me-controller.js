const { User } = require("../../models");
const { CustomErrorHandler } = require("../../services");

const meController = {
  async me(req, res, next) {
    try {
      const user = await User.findOne({ _id: req.user._id }).select(
        "-password -updatedAt -__v"
      );
      if (!user) {
        return next(CustomErrorHandler.notFound());
      }
      res.json(user);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = meController;
