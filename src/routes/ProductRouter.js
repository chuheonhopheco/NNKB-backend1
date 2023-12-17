const express = require("express");
const router = express.Router()
const ProductController = require('../controllers/ProductController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create',ProductController.createProduct) 
router.put('/update/:id', authMiddleWare, ProductController.updateProduct)
router.get('/getOneProduct/:id',authMiddleWare,ProductController.getOneProduct)
router.delete('/deleteProduct/:id',ProductController.deleteProduct)
router.get('/getAllProduct', ProductController.getAllProduct)
router.post('/delete-many',authMiddleWare, ProductController.deleteMany)
router.get('/get-all-type', ProductController.getAllType)

module.exports = router