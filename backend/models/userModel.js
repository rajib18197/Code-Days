const mongoose = require("mongoose");

const userSchema = new mongoose.schema({
  username: {
    type: String,
    required: [true, "User must provide a unique username"],
    unique: true,
    lowercase: true,
    trim: true,
  },

  fullName: {
    type: String,
    required: [true, "User must provide fullName"],
    trim: true,
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    validate: {
      validator() {},
      message: "Please provide a valid email",
    },
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
  },
});
