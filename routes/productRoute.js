const express = require('express');
const Product = require("../models/productModel.js");
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controller/productController.js');

//get all products
router.get('/', getProducts);

//get a single product usins product id 
router.get('/:id', getProduct);

//create a product
router.post('/', createProduct);

//update a aproduct
router.put('/:id', updateProduct);

//delete a product
router.delete('/:id', deleteProduct);



module.exports = router;