const mongoose = require("mongoose");

exports.connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODBURL)
      .then(() => console.log("Database is connected"))
      .catch(() => console.log("Error while connection"));
  } catch (error) {
    console.log("Error: ", error);
  }
};
