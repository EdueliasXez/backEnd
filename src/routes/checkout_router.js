const express = require('express');
const checkoutRouter = express.Router();
const { createPayment } = require('../controllers/index');
const { Ticket } = require('../db');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

checkoutRouter.post('/charge', createPayment);

checkoutRouter.post('/stripe-webhook', async (req, res) => {
    try {
      const event = req.body;
      
      const stripeEvent = stripe.webhooks.constructEvent(
        req.body,
        req.header('Stripe-Signature'), 
        process.env.STRIPE_WEBHOOK_SECRET
      );
  
      if (stripeEvent.type === 'checkout.session.completed') {
        const session = stripeEvent.data.object;

      }
  
      res.sendStatus(200);
    } catch (error) {
      console.error('Error en el webhook de Stripe:', error);
      res.sendStatus(400);
    }
  });

  checkoutRouter.post('/success', async (req, res) => {
    const { cartItems,  userId } = req.body; 
    console.log({ cartItems,  userId })
  
    try {
      const tickets = cartItems.map((item) => {
        return new Ticket({
          date: new Date(),
          serviceProviderId: item.serviceProviderId,
          eventId: item._id,
          userId: userId,
          price: item.price,
          payed: true,
          eventName: item.title,
        });
      });
  
      await Ticket.insertMany(tickets);
  
      res.status(200).json({ message: 'Pago registrado exitosamente' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  checkoutRouter.get("/tickets", async (req, res) => {
    try {
      const tickets = await Ticket.find(); 
  
      res.status(200).json(tickets);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Hubo un error al obtener los tickets" });
    }
  });
  

module.exports = checkoutRouter;