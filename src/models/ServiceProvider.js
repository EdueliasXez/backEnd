const mongoose = require("mongoose");

const serviceProviderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
  },
  images: [String], 
  location: String,
  summary: String,
  verify: Boolean,
});

const ServiceProvider = mongoose.model("ServiceProvider", serviceProviderSchema);

module.exports = ServiceProvider;
