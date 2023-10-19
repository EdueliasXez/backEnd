const express = require('express');
const userRouter = express.Router();
const { getUsers, registerUser, loginUser, getUsersById, updateUser,editUserInfo,editUserInfoByAdmin} = require('../controllers/index');
const { authenticateToken } = require('../middlewares/authMiddleware.js');

userRouter.get('/', getUsers);

userRouter.get('/:userId', getUsersById);

userRouter.post('/register', registerUser);

userRouter.post('/login', loginUser);

userRouter.put('/:id', updateUser)

// Ruta para que los usuarios editen su propia información
userRouter.put('/edit', editUserInfo);

// Ruta para que los administradores editen la información de los usuarios
userRouter.put('/admin/edit/:userId', editUserInfoByAdmin);
module.exports = userRouter;
