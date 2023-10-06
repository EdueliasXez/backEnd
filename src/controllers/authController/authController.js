// authController.js

const User = require('../models/User'); // Importa el modelo de usuario si lo tienes

exports.registrarUsuario = async (req, res) => {
  try {
    // Obtén los datos del cuerpo de la solicitud
    const { nombre, apellido, email, contraseña } = req.body;

    // Realiza validaciones de datos (por ejemplo, campos obligatorios)
    if (!nombre || !apellido || !email || !contraseña) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Verifica si ya existe un usuario con el mismo correo electrónico
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: 'Ya existe un usuario con este correo electrónico' });
    }

    // Crea un nuevo usuario en tu base de datos (usa el modelo de usuario)
    const newUser = new User({
      nombre,
      apellido,
      email,
      contraseña, 
    });

    
    await newUser.save();

    // Si el registro es exitoso, devuelve una respuesta de éxito
    res.status(201).json({ message: 'Registro exitoso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};


