const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: String,
  firstName: String,
  lastName: String,
  birthdate: Date,
  email: String,
  password: String,
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
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
