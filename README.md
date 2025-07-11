Step 1 - install npm packages express, mongoose,cors.

Step 2 - create the folder MVC pattern contollers (recipeContoller.js for add all method get post put and delete ), models (recipeSchema.js for add the schemas ), route(recipeRoutes.js for write tha all method rotues), mydataBase.js (database connetion) and index.js

Step 3 - In index .js decleaer the express in app and runing in 3000 port

Step 4 - Connect the database in myDataBase.js import tha mongoose and connet the data base url with database name in connectDb arrow function and export the function (module .exports = functionname)

Step 5 - Then call the myDataBase.js in index.js

Step 6 - And we decide which datas we want to store mongodb have schemaless database so we add the schema using mongoose and here we add the condition type and reurired of title ingredients and description .

Step 7 - Then we Create the methods get post put delete first import the schema and write the code for createRecipe creating the arrow async function pass the two parameter req and res its async function so try and catch and if it working try block execute ortherwise catch block execute . (1)create constent (recipe) add new Recipe module from Schema and (req.body ) and then save the value recipe.save() in await . if try block false go to catch block show the error same like other 4 function but first line change (2)find all (Recipe.find()) (3) findbyid (Recipe.findbyId(req.params.id)) (4) updateRecipe (Recipe.findByIdAndUpdate(req.params.id, req.body)) (5) deleteRecipe (Recipe.findByIdAndUpdate(req.params.id)) ..params.id get from url. and export all the function using module.exports ={ createRecipe,getAllRecipes,getRecipeById,updateRecipe,deleteRecipe,}

Step 8 - Then create the route using express roter in recipeRouter.js import bthe express and rotue and import 5 function from recipeController . and set the patha name each method ex (router.post("/",reateRecipe);) same like other 4 add the path  and wrote the each method router.method.

Step 9 - Schema controller and router completed so import in index.js import express, cors, myDataBase and recipRoute.. cors is middleware  it allow to accept the request from disrrent server  app.use(cors({ origin: "*" })). and call the database. app.use(express.json())  use for parse incoming JSON data from the request body. and app.use("/recipes", recipeRoutes)  use to import all the route in app.

Step 10 - Create a cluster in mongo db and set the mongodb url .env file then process the env file

Postman document added
https://www.postman.com/docking-module-operator-54362723/recipe-app/collection/zxbor4s/recipe-app
