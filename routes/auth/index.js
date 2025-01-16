const express = require("express");
const { registerRouter } = require("./register");
const { signinRouter } = require("./signin");
const { meRouter } = require("./me");

const router = express.Router();

router.use(registerRouter);
router.use(signinRouter);
router.use(meRouter);

module.exports = { authRouter: router };
