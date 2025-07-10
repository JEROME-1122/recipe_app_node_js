const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/recipeDB");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("DB connection error:", error);
  }
};

module.exports = connectDb;
