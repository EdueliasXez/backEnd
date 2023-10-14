const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const cloudinary = require('./handlers/Cloudinary');
const config = require('./handlers/configCloudinary');
const multer = require('multer'); 

const server = express();

server.use(morgan("dev"));
server.use(express.json());

const corsOptions = {
  origin: '*',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 204,
};

server.use(cors(corsOptions));


const upload = multer({ dest: 'uploads/' }); 

cloudinary.config(config.cloudinary);

server.use(router);

module.exports = server;
