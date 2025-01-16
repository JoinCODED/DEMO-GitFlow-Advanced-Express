const express = require("express");
const { registerRouter } = require("./register");
const { loginRouter } = require("./login");
const { meRouter } = require("./me");
const { getUserRouter } = require("./getUser");

const router = express.Router();

router.use(registerRouter);
router.use(loginRouter);
router.use(meRouter);
router.use(getUserRouter);

module.exports = { authRouter: router };
