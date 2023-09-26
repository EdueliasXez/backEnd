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
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
