
const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./myDataBase");
const recipeRoutes = require("./routes/recipeRoutes");
require('dotenv').config();

connect();



app.use(cors({ origin: "*" }));
app.use(express.json());



app.use("/recipes", recipeRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});