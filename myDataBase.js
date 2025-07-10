const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://jeromfranklin160:TZP2q2VDACsB3b1O@cluster0.05rxsif.mongodb.net/recipeDB?retryWrites=true&w=majority&appName=Cluster0);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("DB connection error:", error);
  }
};

module.exports = connectDb;
