const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function createPayment(req, res) {
  const { amount, currency } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error al crear el pago:', error);
    res.status(500).json({ error: 'No se pudo crear el pago' });
  }
}

module.exports = createPayment

