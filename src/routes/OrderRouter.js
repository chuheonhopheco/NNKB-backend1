const express = require("express");
const router = express.Router()
const OrderController = require('../controllers/OrderController');
const { authMiddleWare,authUserMiddleWare } = require("../middleware/authMiddleware");

router.post('/create/:id',authUserMiddleWare, OrderController.createOrder)
router.get('/get-all-order/:id',authUserMiddleWare, OrderController.getAllOrderDetails)
router.get('/get-details-order/:id',OrderController.getDetailsOrder)
router.delete('/cancel-order/:id',authMiddleWare, OrderController.cancelOrderDetails)
module.exports = router