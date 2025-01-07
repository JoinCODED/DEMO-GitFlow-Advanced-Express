const express = require("express");
const morgan = require("morgan");

const { handleErrors, currentUser } = require("./middleware");
const { NotFoundError } = require("./errors");

const { authRouter } = require("./routes/auth");

const app = express();

/**
 * Middleware
 */
app.use(express.json());
app.use(morgan("dev"));
app.use(currentUser);

/**
 * Routers
 */
app.use("/auth", authRouter);

/**
 * Not Found Catchall
 */
app.all("*", (req) => {
  throw NotFoundError(`${req.method} ${req.url}: Route not found`);
});

/**
 * Error Handling
 */
app.use(handleErrors);

module.exports = app;
