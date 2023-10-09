const express = require('express');
const checkoutRouter = express.Router();
const { createPayment } = require('../controllers/index');

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

module.exports = checkoutRouter;