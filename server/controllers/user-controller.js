const multer = require("multer");
const path = require("path");
const { CustomErrorHandler } = require("../services");
const { User } = require("../models");

// multer stuff
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/"),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});
const handleMultipartData = multer({
  storage,
  limits: { fileSize: 1000000 * 5 },
}).single("avatar");

const userController = {
  async avatar(req, res, next) {
    handleMultipartData(req, res, async (err) => {
      if (err) {
        return next(CustomErrorHandler.serverError(err.message));
      }
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
            { $set: { avatar: req.file.path } }
          );
          res.send("Sucessfully uploded");
        } catch (error) {
          return next(error);
        }
      } catch (error) {
        return next(CustomErrorHandler.notFound());
      }
    });
    res.send("Controller is working fine");
  },
};

module.exports = userController;
