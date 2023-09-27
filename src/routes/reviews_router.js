const express = require('express');
const reviewRouter = express.Router();
const { getReviews, createReview} = require('../controllers/index');

reviewRouter.get("/", getReviews);
reviewRouter.post("/", createReview);

module.exports = reviewRouter;
