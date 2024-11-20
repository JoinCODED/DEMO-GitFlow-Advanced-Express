const express = require("express");

const { postsGetRouter } = require("./postsGet");
const { postCreateRouter } = require("./postCreate");
const { postDeleteRouter } = require("./postDelete");
const { postUpdateRouter } = require("./postUpdate");
const { postGetRouter } = require("./postGet");

const router = express.Router();

router.use(postsGetRouter);
router.use(postGetRouter);
router.use(postCreateRouter);
router.use(postDeleteRouter);
router.use(postUpdateRouter);

module.exports = { postsRouter: router };
