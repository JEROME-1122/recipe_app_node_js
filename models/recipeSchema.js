const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  ingredients: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  }
});



const Recipe=mongoose.model("recipeDetails",recipeSchema);
module.exports=Recipe;
