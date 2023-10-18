const express = require('express');
const eventsRouter = express.Router();
const { getEvents, getEventById, createEvent, updateEvent, removeEvent} = require('../controllers/index');

eventsRouter.get('/', getEvents);
eventsRouter.get('/:id', getEventById);
eventsRouter.post('/create', createEvent);
eventsRouter.delete('/:id', removeEvent);

module.exports = eventsRouter;
