const { Event, Place } = require('../../db');

async function updateEvent(req, res) {
  try {
    const eventId = req.params.id;
    const eventData = req.body.event;
    const placeData = req.body.place;

    const existingEvent = await Event.findById(eventId);

    if (!existingEvent) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }

    existingEvent.title = eventData.title || existingEvent.title;
    existingEvent.summary = eventData.summary || existingEvent.summary;
    existingEvent.price = eventData.price || existingEvent.price;
    existingEvent.stock = eventData.stock || existingEvent.stock;
    existingEvent.date = eventData.date || existingEvent.date;
    existingEvent.images = eventData.images || existingEvent.images;
    existingEvent.active = eventData.active || existingEvent.active;

    if (placeData) {

      if (existingEvent.placeId) {

        const existingPlace = await Place.findById(existingEvent.placeId);
        if (existingPlace) {
          existingPlace.country = placeData.country || existingPlace.country;
          existingPlace.city = placeData.city || existingPlace.city;
          existingPlace.direction = placeData.direction || existingPlace.direction;
          existingPlace.postalCode = placeData.postalCode || existingPlace.postalCode;
          existingPlace.dateAndTime = placeData.dateAndTime || existingPlace.dateAndTime;
          await existingPlace.save();
        }
      } else {
        
        const newPlace = new Place(placeData);
        await newPlace.save();
        existingEvent.placeId = newPlace._id;
      }
    }

    await existingEvent.save();

    res.status(200).json(existingEvent);
  } catch (error) {
    console.error('Error al actualizar el evento:', error);
    res.status(500).json({ error: 'Error al actualizar el evento' });
  }
}

module.exports = updateEvent;

