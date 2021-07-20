const express = require('express');
const router = express.Router();
const {getProducts, getSpecificProduct, createProduct, updateProduct, deleteProduct} = require('../controller/Product')
 
router.get('/', getProducts); 
router.get('/:id', getSpecificProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
