const express = require('express');
const eventsRouter = express.Router();
const { getEvents } = require('../controllers/index');

eventsRouter.get('/', getEvents);

module.exports = eventsRouter;
