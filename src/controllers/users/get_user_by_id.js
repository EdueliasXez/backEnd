const { User, ServiceProvider } = require('../../db');

async function getUserById(req, res) {
  const userId = req.params.userId; 
  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    if (user.isServiceProvider) {
      const serviceProviderInfo = await ServiceProvider.findOne({ userId: user._id });
      return res.status(200).json({ ...user.toObject(), serviceProviderInfo });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error al obtener usuario por ID:', error);
    res.status(500).json({ error: 'Error al obtener usuario por ID' });
  }
}

module.exports = getUserById;
