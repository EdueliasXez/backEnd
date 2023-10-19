const { User, ServiceProvider } = require("../../db");
const bcrypt = require('bcryptjs');

async function updateUser(req, res) {
  try {
    const { userId } = req.params; 
    const updateData = req.body; 


    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    await User.findByIdAndUpdate(userId, updateData);

    if (user.isServiceProvider && updateData.isServiceProvider) {
      await ServiceProvider.findOneAndUpdate({ userId: userId }, updateData);
    }

    return res.status(200).json({ message: "Información del usuario actualizada con éxito" });
  } catch (error) {
    console.error("Error al actualizar la información del usuario:", error);
    res.status(500).json({ error: "Error al actualizar la información del usuario" });
  }
}

module.exports =  updateUser 
