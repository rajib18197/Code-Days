const express = require("express");

const app = express();

app.use(express.static("/public"));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use("/api/v1/users", userRoutes);

module.exports = app;
