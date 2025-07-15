const mongoose = require("mongoose");

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://jeromfranklin160:TZP2q2VDACsB3b1O@cluster0.05rxsif.mongodb.net/recipeDB?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const connected = async () => {
  try {
  await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(" You successfully connected to MongoDB!");
    // console.log(process.env.DB_LINK)
  } catch (error) {
    console.error("DB connection error:", error);
  }
};

module.exports = connected;


