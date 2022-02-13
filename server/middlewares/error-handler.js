const { DEBUG_MODE } = require("../config");
const validationError = require("joi");
const { CustomErrorHandler } = require("../services");

const errHandler = (err, req, res, next) => {
  let statusCode = 500;
  let data = {
    message: "Internal server error",
    ...(DEBUG_MODE === "true" && { originalError: err.message }),
  };
  // when server get validation error of Joi from user
  if ((err, validationError)) {
    statusCode = 422;
    data = {
      message: err.message,
    };
  }
  // when server get custom errors
  if (err instanceof CustomErrorHandler) {
    statusCode = err.status;
    data = {
      message: err.message,
    };
  }

  return res.status(statusCode).json(data);
};

module.exports = errHandler;
