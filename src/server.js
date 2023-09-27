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

module.exports = server;
