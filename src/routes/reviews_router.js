const express = require('express');
const reviewRouter = express.Router();
const { getReviews, createReview, updateReview, deleteReview, getReviewsByItemId} = require('../controllers/index');

reviewRouter.get("/", getReviews);
reviewRouter.get("/:reviewedItemId", getReviewsByItemId);
reviewRouter.post("/create", createReview);
// reviewRouter.put('/reviews/:id', updateReview);
// reviewRouter.delete('/reviews/:id', deleteReview);

module.exports = reviewRouter;
