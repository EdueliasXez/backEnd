const express = require('express');
const userRouter = express.Router();
const { getUsers, registerUser, loginUser, getUsersById} = require('../controllers/index');
const { authenticateToken } = require('../middlewares/authMiddleware.js');

userRouter.get('/', getUsers);

userRouter.get('/:userId', getUsersById);

userRouter.post('/register', registerUser);

userRouter.post('/login', loginUser);

module.exports = userRouter;
