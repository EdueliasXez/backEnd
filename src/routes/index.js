const { Router } = require("express");
const events_router = require('./events_router');
const reviews_router = require('./reviews_router');
const router = Router();


router.use('/events', events_router);
router.use('/review', reviews_router);

router.use((req, res, next) => {
    console.log('Ruta no encontrada:', req.originalUrl);
    res.status(404).json({ error: 'Ruta no encontrada' });
  });
  
module.exports = router;
