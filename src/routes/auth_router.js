const express = require('express');
const authRouter = express.Router();
const User = require('../models/User'); // Asegúrate de importar tu modelo de usuario aquí

// Ruta para verificar si un usuario está registrado
authRouter.post('/api/checkIfRegistered', async (req, res) => {
  try {
    // Accede a la dirección de correo electrónico desde el cuerpo de la solicitud
    const { email } = req.body;

    // Realiza la verificación en tu base de datos para determinar si el usuario ya está registrado
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.json({ isRegistered: true });
    } else {
      res.json({ isRegistered: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en la verificación de registro' });
  }
});

module.exports = authRouter ;