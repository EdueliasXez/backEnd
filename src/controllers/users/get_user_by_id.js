const { User} = require('../../db.js');

async function getUserById(userId) {
  try {
    const user = await User.findOne({
      where: {
        id: userId, 
      },
    });

    if (!user) {
      throw new Error('Usuario no encontrado'); 
    }

    return user;
  } catch (error) {
    throw new Error('Error al obtener el usuario por ID');
  }
}

module.exports = getUserById;
