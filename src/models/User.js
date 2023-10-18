const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, unique: true }, 
  firstName: String,
  lastName: String,
  birthdate: Date,
  email: { type: String, unique: true }, 
  password: String,
  country: String,
  city: String,
  wantsNotifications: Boolean,
  isAdmin: Boolean,
  active: Boolean,
  isServiceProvider: Boolean,
  serviceProviderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceProvider",
  },
  cartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
    googleId: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
