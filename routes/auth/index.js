const express = require("express");
const { registerRouter } = require("./register");
const { loginRouter } = require("./login");
const { meRouter } = require("./me");

const router = express.Router();

router.use(registerRouter);
router.use(loginRouter);
router.use(meRouter);

module.exports = { authRouter: router };
