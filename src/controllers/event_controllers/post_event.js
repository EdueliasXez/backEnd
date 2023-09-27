const { Event, Place, User, Category } = require('../../db');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2; 

async function createEvent(req, res) {
  try {
    const eventData = req.body.event;
    const placeData = req.body.place;

    if (!mongoose.Types.ObjectId.isValid(eventData.serviceProviderId)) {
      return res.status(400).json({ error: 'El serviceProviderId no es válido' });
    }

    const serviceProvider = await User.findById(eventData.serviceProviderId);

    if (!serviceProvider) {
      return res.status(400).json({ error: 'Proveedor de servicios no encontrado' });
    }

    const categories = await Category.find({ _id: { $in: eventData.categoryIds } });

    if (categories.length !== eventData.categoryIds.length) {
      return res.status(400).json({ error: 'Una o más categorías no existen' });
    }

    // Subir imágenes a Cloudinary
    const uploadedImages = [];
    for (const image of eventData.images) {
      const result = await cloudinary.uploader.upload(image); 
      uploadedImages.push(result.secure_url); 
    }

    eventData.images = uploadedImages; 

    const place = await Place.create(placeData);
    eventData.placeId = place._id;

    const event = await Event.create(eventData);

    res.status(201).json(event);
  } catch (error) {
    console.error('Error al crear el evento:', error);
    res.status(500).json({ error: 'Error al crear el evento' });
  }
}

module.exports = createEvent;

