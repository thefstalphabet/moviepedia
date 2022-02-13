const express = require("express");
const app = express();
const { PORT } = require("./config");
const routes = require("./routes");
const { errorHandler } = require("./middlewares");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
app.use('/public', express.static('public'));

// database
require("./database/connection");

// routes
app.use("/api", routes);

// middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listing on port ${PORT}.`);
});
