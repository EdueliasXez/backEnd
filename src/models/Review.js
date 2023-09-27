const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  comment: String,
  rating: Number,
  active: Boolean,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  reviewedItemType: {
    type: String,
    enum: ["event", "serviceProvider"],
    required: true,
  },
  reviewedItemId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;

