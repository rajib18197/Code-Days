const mongoose = require("mongoose");

exports.dbConnect = async () => {
  try {
    const conn = await mongoose.connect(``);
    console.log(conn);
    return "db connection successfull!!!";
  } catch (err) {
    err.message = "db connection failed!!!";
    console.error(err);
    throw err;
  }
};
