const mongoose = require("mongoose");
require("dotenv").config();

const { MONGO_URI } = process.env;

try {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (error) {
  console.error(error);
}

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error de conexión a MongoDB:"));
db.once("open", () => {
  console.log("Conexión exitosa a MongoDB.");
});

const Schema = mongoose.Schema;


const User = require("./models/User");
const Event = require("./models/Event");
const Ticket = require("./models/Ticket");
const Review = require("./models/Review");
const Cart = require("./models/Cart");
const Place = require("./models/Place");
const ServiceProvider = require("./models/ServiceProvider");
const Category = require("./models/Category");


module.exports = {
  User,
  Event,
  Ticket,
  Review,
  Cart,
  Place,
  ServiceProvider,
  Category,
  db,
};
