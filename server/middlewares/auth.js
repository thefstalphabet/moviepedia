const { CustomErrorHandler, JwtService } = require("../services");

const auth = async (req, res, next) => {
  let authHeader = req.headers.authorization;

  if (!authHeader) {
    return next(CustomErrorHandler.unAuthorized());
  }
  const token = authHeader.split(" ")[1];
  try {
    const { _id, email } = await JwtService.verify(token);
    const user = {
      _id: _id,
      email: email,
    };
    req.user = user;
    next();
  } catch (error) {
    return next(CustomErrorHandler.unAuthorized());
  }
};

module.exports = auth;
