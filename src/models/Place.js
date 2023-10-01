const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  country: String,
  city: String,
  direction: String,
  postalCode: String,
  dateAndTime: {
    date: Date,
    time: String,
  },
  serviceProviderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceProvider", 
    default: "clickyTicket", 
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
  },
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
