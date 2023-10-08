const { User } = require('../../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sgMail = require('../sendgridConfig');
const ServiceProvider = require('../../models/ServiceProvider');
require('dotenv').config();

async function registerUser(req, res) {
  try {
    const {
      userName,
      firstName,
      lastName,
      birthdate,
      email,
      password,
      country,
      city,
      wantsNotification,
      googleProfile,
      isServiceProvider,
    } = req.body;

    const existingUserByEmail = await User.findOne({ email });
    if (existingUserByEmail) {
      return res.status(400).json({ error: 'El correo electrónico ya está en uso.' });
    }

    const existingUserByUsername = await User.findOne({ userName });
    if (existingUserByUsername) {
      return res.status(400).json({ error: 'El nombre de usuario ya está en uso.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      userName,
      email,
      firstName,
      lastName,
      birthdate,
      password: hashedPassword,
      isServiceProvider,
      wantsNotification,
      isAdmin: false,
      country,
      city,
    });

    if (isServiceProvider) {
      if (!req.body.images || !req.body.location || !req.body.summary) {
        await User.findByIdAndDelete(newUser._id); 
        return res.status(400).json({ error: 'Se requiere información adicional para el proveedor de servicios.' });
      }

      await ServiceProvider.create({
        userId: newUser._id, 
        images: req.body.images,
        location: req.body.location,
        summary: req.body.summary,
        verify: false,
      });
    }

    const tokenPayload = {
      userId: newUser.id,
      isServiceProvider,
      isAdmin: false,
    };

    if (googleProfile) {
      tokenPayload.googleProfile = googleProfile;
    }

    const token = jwt.sign(
      tokenPayload,
      process.env.SECRET_KEY,
      { expiresIn: '1h' }
    );

    // Resto del código sin cambios...

    return res.status(201).json({ message: 'Usuario registrado exitosamente', token });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    return res.status(500).json({ error: 'Error al registrar el usuario' });
  }
}

module.exports = registerUser;
