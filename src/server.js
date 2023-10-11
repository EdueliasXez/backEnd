const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const cloudinary = require('./handlers/Cloudinary');
const config = require('./handlers/configCloudinary');

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

cloudinary.config(config.cloudinary);

server.use(router);

mongoose.connect('mongodb+srv://clickyticket:fCjhJzkokUW8sDh3@cluster0.by2floh.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = server;
