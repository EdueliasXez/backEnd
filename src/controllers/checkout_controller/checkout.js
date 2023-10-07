require('dotenv').config();
const Stripe = require('stripe');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const createSession = async (req, res) => {
  try {
    const { line_items } = req.body;

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: 'payment',
      success_url: 'http://localhost:3000/checkout/success',
      cancel_url: 'http://localhost:3000/checkout/cancel',
    });

    console.log(session);
    return res.json({ id: session.id, url: session.url }); 
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


module.exports = createSession;

