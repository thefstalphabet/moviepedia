const mongoose = require("mongoose");
const { APP_URL } = require("../config");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: {
      type: String,
      required: false,
      default: null,
      get: (avatar) => {
        return !avatar ? null : `${APP_URL}/${avatar}`;
      },
    },
    favorites: { type: Array, reduired: false, default: null },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  }
);
module.exports = mongoose.model("User", userSchema, "users");
