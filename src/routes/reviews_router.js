const express = require('express');
const reviewRouter = express.Router();
const { getReviews, createReview, updateReview, deleteReview} = require('../controllers/index');

reviewRouter.get("/", getReviews);
reviewRouter.post("/", createReview);
// reviewRouter.put('/reviews/:id', updateReview);
// reviewRouter.delete('/reviews/:id', deleteReview);

module.exports = reviewRouter;
