const { Event, Place } = require('../../db');

async function removeEvent(req, res) {
  const eventId = req.params.id;

  try {
    const deletedEvent = await Event.findByIdAndDelete(eventId);

    if (!deletedEvent) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }

    await Place.findByIdAndDelete(deletedEvent.placeId);

    res.status(200).json({ message: 'Evento y lugar asociado eliminados correctamente' });
  } catch (error) {
    console.error('Error al eliminar el evento:', error);
    res.status(500).json({ error: 'Error al eliminar el evento' });
  }
}

module.exports = removeEvent;

