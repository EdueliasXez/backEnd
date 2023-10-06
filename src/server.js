const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const cloudinary = require('./handlers/Cloudinary');
const config = require('./handlers/configCloudinary');
const authRoutes = require('./routes/authRoutes'); // Importa tus rutas de autenticación

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

cloudinary.config(config.cloudinary);


server.use('/api/auth', authRoutes); // Supongamos que /api/auth es la ruta de registro

server.use(router);

module.exports = server;
