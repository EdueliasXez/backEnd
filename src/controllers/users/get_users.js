const { User, ServiceProvider} = require('../../db');

async function getUsers(req, res) {
  try {
    const users = await User.find();

    const usersWithServiceProviderInfo = await Promise.all(
      users.map(async (user) => {
        if (user.isServiceProvider) {
          const serviceProviderInfo = await ServiceProvider.findOne({ userId: user._id });
          return { ...user.toObject(), serviceProviderInfo };
        }
        return user;
      })
    );

    res.status(200).json(usersWithServiceProviderInfo);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
}

module.exports = getUsers;

