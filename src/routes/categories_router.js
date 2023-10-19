const express = require('express');
const categoriesRouter = express.Router();
const { getCategories} = require('../controllers/index');

categoriesRouter.get('/', getCategories);


module.exports = categoriesRouter;
