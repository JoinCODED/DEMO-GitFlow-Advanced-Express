const express = require("express");
const morgan = require("morgan");

const { handleErrors } = require("./middleware");
const { NotFoundError } = require("./errors");

const { authRouter } = require("./routes/auth");
const { postsRouter } = require("./routes/posts");

const app = express();

/**
 * Middleware
 */
app.use(express.json());
app.use(morgan("dev"));

/**
 * Routers
 */
app.use("/auth", authRouter);
app.use("/posts", postsRouter);

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
