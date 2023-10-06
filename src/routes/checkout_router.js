const express = require('express');
const checkoutRouter = express.Router();
const { createPayment } = require('../controllers/index');

checkoutRouter.post('/charge', createPayment);


module.exports = checkoutRouter;