// userController.js
const { User } = require('../../db');  

// Controlador para que los usuarios editen su propia información
const editUserInfo = (req, res) => {
  const userId = req.user.id; 
  const updatedInfo = req.body; 

  User.findByIdAndUpdate(userId, updatedInfo, { new: true }, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
    return res.status(200).json({ message: 'Información de usuario actualizada', user });
  });
};

// Controlador para que los administradores editen la información de los usuarios
const editUserInfoByAdmin = (req, res) => {
  const userId = req.params.userId; // 
  const updatedInfo = req.body; // 

  User.findByIdAndUpdate(userId, updatedInfo, { new: true }, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
    return res.status(200).json({ message: 'Información de usuario actualizada por el administrador', user });
  });
};

module.exports = {
  editUserInfo,
  editUserInfoByAdmin,
};
