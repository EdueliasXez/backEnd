const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: String,
  summary: String,
  price: Number,
  stock: Number,
  date: Date,
  images: [String],
  active: Boolean,
  serviceProviderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    default: "clickyTicket", 
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  placeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Place",
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
