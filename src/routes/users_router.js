const express = require('express');
const userRouter = express.Router();
const { getUsers, registerUser, loginUser, getUsersById, updateUser} = require('../controllers/index');
const { authenticateToken } = require('../middlewares/authMiddleware.js');

userRouter.get('/', getUsers);

userRouter.get('/:userId', getUsersById);

userRouter.post('/register', registerUser);

userRouter.post('/login', loginUser);

userRouter.put('/:id', updateUser)

module.exports = userRouter;
