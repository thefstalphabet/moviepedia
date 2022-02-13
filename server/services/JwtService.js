const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

class JwtService {
  // assigning jwt token
  static sign(payload, expiry = "7d", secret = JWT_SECRET) {
    return jwt.sign(payload, secret, { expiresIn: expiry });
  }

  //  when we veryfy the user
  static verify(token, secret = JWT_SECRET) {
    return jwt.verify(token, secret);
  }
}

module.exports = JwtService;
