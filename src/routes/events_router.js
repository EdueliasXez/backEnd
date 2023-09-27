const express = require('express');
const eventsRouter = express.Router();
const { getEvents, createEvent, updateEvent, removeEvent} = require('../controllers/index');

eventsRouter.get('/', getEvents);
eventsRouter.post('/create', createEvent);
// eventsRouter.put('/:id', updateEvent);
eventsRouter.delete('/:id', removeEvent);

module.exports = eventsRouter;
