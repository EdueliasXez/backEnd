const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  comment: String,
  rating: Number,
  active: Boolean,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
  },
  serviceProviderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceProvider",
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
