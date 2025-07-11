const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});



const Recipe=mongoose.model("recipeDetails",recipeSchema);
module.exports=Recipe;
