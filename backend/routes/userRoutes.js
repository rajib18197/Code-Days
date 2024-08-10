const express = require("express");

const router = express.router();

router.get("/signup", authController.signUp);

module.exports = router;
