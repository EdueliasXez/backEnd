const { User } = require('../../db');

exports.updateUser = async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el usuario.' });
    }
  };