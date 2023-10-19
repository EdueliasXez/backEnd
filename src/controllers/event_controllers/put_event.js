//actions

// put event del back funcionando



const { Event, Place, User, Category } = require('../../db');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2; 

async function updateEvent(req, res) {
  try {
    const eventId = req.params.id;
    const eventData = req.body.event;
    const placeData = req.body.place;

    if (!mongoose.Types.ObjectId.isValid(eventId)) {
      return res.status(400).json({ error: 'El ID del evento no es válido' });
    }

    const existingEvent = await Event.findById(eventId);

    if (!existingEvent) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }

    // Actualiza los campos del evento
    existingEvent.title = eventData.title || existingEvent.title;
    existingEvent.summary = eventData.summary || existingEvent.summary;
    existingEvent.price = eventData.price || existingEvent.price;
    existingEvent.stock = eventData.stock || existingEvent.stock;
    existingEvent.date = eventData.date || existingEvent.date;
    
    // Sube nuevas imágenes a Cloudinary y actualiza la lista de imágenes del evento
    if (eventData.images && eventData.images.length > 0) {
      const uploadedImages = [];
      for (const image of eventData.images) {
        const result = await cloudinary.uploader.upload(image); 
        uploadedImages.push(result.secure_url); 
      }
      existingEvent.images = uploadedImages;
    }

    // Actualiza el lugar asociado al evento si se proporciona en el cuerpo de la solicitud
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






