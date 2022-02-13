const mongoose = require("mongoose");
const { DB_URL } = require("../config");

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database sucessfully");
  })
  .catch((error) => {
    console.log("Database not connected");
  });
