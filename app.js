const express = require("express");
const morgan = require("morgan");

const { authRouter } = require("./routes/auth");
const { postsRouter } = require("./routes/posts");
const { handleErrors } = require("./middleware");

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
 * Error Handling
 */
app.use(handleErrors);

module.exports = app;
