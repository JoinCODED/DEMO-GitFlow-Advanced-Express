const express = require("express");

const { authRouter } = require("./routes/auth");
const { postsRouter } = require("./routes/posts");

const app = express();

/**
 * Middleware
 */
app.use(express.json());

/**
 * Routers
 */
app.use("/auth", authRouter);
app.use("/posts", postsRouter);

module.exports = app;
