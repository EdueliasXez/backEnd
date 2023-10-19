const { User } = require('../../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const axios = require('axios');

async function loginUser(req, res) {
  try {
    const { email, password, rememberMe, googleCode } = req.body;

    if (googleCode) {
      const googleTokenResponse = await exchangeGoogleCodeForToken(googleCode);
      const googleProfile = await fetchGoogleUserProfile(googleTokenResponse.access_token);

      const existingUser = await User.findOne({ googleId: googleProfile.id });

      if (existingUser) {
        const accessToken = jwt.sign({ userId: existingUser._id }, process.env.SECRET_KEY, {
          expiresIn: '1h',
        });
        const refreshToken = jwt.sign({ userId: existingUser._id }, process.env.REFRESH_SECRET_KEY, {
          expiresIn: '7d',
        });

        return res
          .status(200)
          .json({ message: 'Inicio de sesión exitoso', accessToken, refreshToken });
      }
    }

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const expiresIn = rememberMe ? '7d' : '1h';
    const accessToken = jwt.sign(
      { userId: user._id, isSeller: user.isSeller },
      process.env.SECRET_KEY,
      { expiresIn }
    );
    const refreshToken = jwt.sign({ userId: user._id }, process.env.REFRESH_SECRET_KEY, {
      expiresIn: '7d',
    });

    if (rememberMe) {
      // En MongoDB, normalmente no se utiliza la gestión de cookies como en Sequelize, pero puedes adaptarlo según tus necesidades.
      // Aquí simplemente se responde con los tokens en lugar de establecer una cookie.
      return res
        .status(200)
        .json({ message: 'Inicio de sesión exitoso', accessToken, refreshToken });
    }

    return res.status(200).json({ message: 'Inicio de sesión exitoso', accessToken, refreshToken });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    return res.status(500).json({ error: 'Error al iniciar sesión' });
  }
}


module.exports = loginUser;
