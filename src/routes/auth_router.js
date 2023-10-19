const express = require('express');
const authRouter = express.Router();
const User = require('../models/User'); // Asegúrate de importar tu modelo de usuario aquí


authRouter.post('/google-auth', async (req, res) => {
    const { tokenId } = req.body; // Obtiene el token de acceso del cliente
  
    try {
      // Verifica el token de acceso con Google y obtén los datos del usuario
      const { data } = await googleClient.verifyIdToken({
        idToken: tokenId,
        audience: process.env.GOOGLE_CLIENT_ID, // Asegúrate de configurar esta variable de entorno
      });
  
      // En este punto, `data` contiene la información del usuario de Google
  
      // Comprueba si el usuario ya existe en tu base de datos o regístralo si es necesario
      let user = await User.findOne({ email: data.email }); // Busca un usuario con el mismo email
  
      if (!user) {
        alert("debe registrarse primero!")
      }
  
      // Devuelve los datos del usuario al cliente
      res.status(200).json(userData);
    } catch (error) {
      console.error('Error de autenticación de Google:', error);
      res.status(401).json({ message: 'Autenticación fallida' });
    }
  });
  
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