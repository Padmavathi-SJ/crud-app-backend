const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel.js");
const productRoute = require('./routes/productRoute.js');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);


app.get("/", (req, res) => {
  res.send("Hello from node API server updated");
});



mongoose.connect(
    "mongodb+srv://padmavathisj2005:backendDB@backenddb.2c9fk.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log(`Server is running on port 3000`);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
