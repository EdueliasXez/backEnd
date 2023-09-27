const { Event, Place, Category } = require('../../db');

async function getEvents(req, res) {
  try {
    const events = await Event.find()
      .populate({
        path: 'categories',
        model: 'Category',
      })
      .populate({
        path: 'placeId',
        model: 'Place',
      });

    res.json(events);
  } catch (error) {
    console.error('Error al obtener eventos:', error);
    res.status(500).json({ error: 'No se pudieron obtener los eventos' });
  }
}

module.exports = getEvents;
