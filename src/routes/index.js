const { Router } = require("express");
const events_router = require('./events_router');
const reviews_router = require('./reviews_router');
const categories_router = require('./categories_router');
const checkout_router = require('./checkout_router');
const users_router = require('./users_router');
const google_router = require('./google_router');
const router = Router();


router.use('/events', events_router);
router.use('/categories', categories_router);
router.use('/review', reviews_router);
router.use('/checkout', checkout_router);
router.use('/user', users_router);
router.use('/google', google_router);


router.use((req, res, next) => {
    console.log('Ruta no encontrada:', req.originalUrl);
    res.status(404).json({ error: 'Ruta no encontrada' });
  });
  
module.exports = router;