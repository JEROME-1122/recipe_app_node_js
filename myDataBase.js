const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("DB connection error:", error);
  }
};

module.exports = connectDb;
