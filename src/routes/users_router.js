const express = require('express');
const userRouter = express.Router();
const { getUsers, registerUser, loginUser, getUsersById} = require('../controllers/index');
const {Ticket} = require('../db');
const { authenticateToken } = require('../middlewares/authMiddleware.js');

userRouter.get('/', getUsers);

userRouter.get('/:userId', getUsersById);

userRouter.get('/tickets/:userId', async (req, res) => {
    const userId = req.params.userId;
  
    try {
      const tickets = await Ticket.find({ userId }); 
      res.json(tickets);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los tickets.' });
    }
  });
  

userRouter.post('/register', registerUser);

userRouter.post('/login', loginUser);

module.exports = userRouter;
