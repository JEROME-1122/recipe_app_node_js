// index.js
const express = require("express");
const cors = require("cors");
const connect = require("./myDataBase");
const recipeRoutes = require("./routes/recipeRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;


connect();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("API is working.");
});


app.use("/recipes", recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
