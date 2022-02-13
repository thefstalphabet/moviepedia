class CustomErrorHandler extends Error {
  // construtor
  constructor(status, msg) {
    super();
    this.status = status;
    this.message = msg;
  }

  // methods
  // when email already exissts
  static alreadyExists(message) {
    return new CustomErrorHandler(409, message);
  }
  // when get wrong credentials while login
  static worngCredentials(message = "Invalid email and password") {
    return new CustomErrorHandler(401, message);
  }
  // when we get a invalid or non token
  static unAuthorized(message = "Unauthorized") {
    return new CustomErrorHandler(401, message);
  }
  // when user not found in database
  static notFound(message = "404 not found") {
    return new CustomErrorHandler(404, message);
  }
  // server error
  static serverError(message = "Internal server error") {
    return new CustomErrorHandler(500, message);
  }
}

module.exports = CustomErrorHandler;
