const { User } = require("../models");
const CustomErrorHandler = require("../services/CustomErrorHandler");

const movieController = {
  async store(req, res, next) {
    try {
      // finding user
      const user = await User.findOne({ _id: req.user._id });
      if (!user) {
        return next(CustomErrorHandler.notFound());
      }
      try {
        await User.updateOne(
          {
            _id: user._id,
          },
          { $push: { favorites: req.body.item } }
        );
        res.json({ item: req.body.item });
      } catch (error) {
        return next(error);
      }
    } catch (error) {
      return next(CustomErrorHandler.notFound());
    }
  },
  async throw(req, res, next) {
    try {
      // finding user
      const user = await User.findOne({ _id: req.user._id });
      if (!user) {
        return next(CustomErrorHandler.notFound());
      }
      try {
        await User.updateOne(
          {
            _id: user._id,
          },
          { $pull: { favorites: { imdbID: req.body.item.imdbID } } }
        );
        res.json({ item: req.body.item });
      } catch (error) {
        return next(error);
      }
    } catch (error) {
      return next(CustomErrorHandler.notFound());
    }

    res.send("throw is working fine");
  },
};

module.exports = movieController;
