const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  date: Date,
  serviceProviderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event", 
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  price: Number,
  payed: Boolean,
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
