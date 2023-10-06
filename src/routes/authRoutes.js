const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para el registro de usuarios
router.post('/registro', authController.registrarUsuario);

module.exports = router;
