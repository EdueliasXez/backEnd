const { Event, Place, Category } = require('../../db');

async function getEventById(req, res) {
  const eventId = req.params.id; 

  try {
    const event = await Event.findById(eventId)
      .populate({
        path: 'categories',
        model: 'Category',
      })
      .populate({
        path: 'placeId',
        model: 'Place',
      });

    if (!event) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }

    res.json(event);
  } catch (error) {
    console.error('Error al obtener evento por ID:', error);
    res.status(500).json({ error: 'No se pudo obtener el evento por ID' });
  }
}

module.exports = getEventById;
