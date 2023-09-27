const { User} = require('../../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sgMail = require('../sendgridConfig'); 
require('dotenv').config();

async function registerUser(req, res) {
  try {
    const { 
      username,  
      firstName, 
      lastName, 
      birthdate,
      email,
      password,  
      wantsNotification, 
      googleProfile,
      isAdmin,
      isServiceProvider,
     } = req.body;

    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ error: 'El usuario con este correo electrónico ya existe.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      firstName, 
      lastName, 
      birthdate,
      password: hashedPassword, 
      isServiceProvider,
      wantsNotification,
      isAdmin: isAdmin || false,
    });

    const tokenPayload = {
      userId: newUser.id,
      isServiceProvider,
      isAdmin: isAdmin || false,
    };

    if (googleProfile) {
      tokenPayload.googleProfile = googleProfile;
    }

    const token = jwt.sign(
      tokenPayload,
      process.env.SECRET_KEY,
      { expiresIn: '1h' }
    );

    const msg = {
      to: email, 
      from: 'clickyticketg18pf@gmail.com', 
      subject: 'Bienvenido a ClickyTicket',
      text: '¡Gracias por unirte a nuestra aplicación!',
      html: '<strong>¡Gracias por unirte a nuestra aplicación!</strong>',
    };

    sgMail.send(msg)
      .then(() => console.log('Correo electrónico de bienvenida enviado'))
      .catch((error) => console.error('Error al enviar el correo electrónico de bienvenida', error));



    return res.status(201).json({ message: 'Usuario registrado exitosamente', token });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    return res.status(500).json({ error: 'Error al registrar el usuario' });
  }
}

module.exports = registerUser;

