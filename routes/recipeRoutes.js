const express = require("express");
const router = express.Router();
const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

router.post("/add/", createRecipe);
router.get("/get/", getAllRecipes);
router.get("/get/:id", getRecipeById);
router.put("/update/:id", updateRecipe);
router.delete("/delete/:id", deleteRecipe);

module.exports = router;
