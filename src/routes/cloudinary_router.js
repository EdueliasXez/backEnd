const express = require('express');
const cloudinaryRouter = express.Router();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const validUrl = require('valid-url');

const upload = multer({ dest: 'uploads/' });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});



cloudinaryRouter.post('/upload', upload.array('images'), (req, res) => {

  console.log('cuerpo', req.body)

  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "No se han subido imágenes" });
  }

  const promises = req.files.map((file) => {
    return cloudinary.uploader.upload(file.path);
  });

  Promise.all(promises).then((results) => {

    const imageUrls = results.map((result) => result.url);

    res.json({
      message: "Imágenes subidas correctamente a Cloudinary",
      imageUrls,
    });
  }).catch((error) => {

    console.error("Error al subir las imágenes a Cloudinary:", error);
    res.status(500).json({ message: "Error al subir las imágenes a Cloudinary" });
  });
  
});


cloudinaryRouter.post('/prueba', upload.array('images'), (req, res) => {

  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "No se han subido imágenes" });
  }

  res.json({
    message: "Imágenes subidas correctamente",
    files: req.files,
  });
});

module.exports = cloudinaryRouter;
