const { Router } = require("express");
const events_router = require('./events_router');
const reviews_router = require('./reviews_router');
const users_router = require('./users_router');
const google_router = require('./google_router');
const soft_delete_router = require('./soft_delete_router');
const router = Router();


router.use('/events', events_router);
router.use('/review', reviews_router);
router.use('/user', users_router);
router.use('/google', google_router);
router.use('/soft_delete', soft_delete_router);


router.use((req, res, next) => {
    console.log('Ruta no encontrada:', req.originalUrl);
    res.status(404).json({ error: 'Ruta no encontrada' });
  });
  
module.exports = router;
