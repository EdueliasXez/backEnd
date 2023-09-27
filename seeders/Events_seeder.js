const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { Event, Category, Place } = require('../src/db');
const eventsData = require('./Events_data'); // Importa los datos de eventos

dotenv.config();

async function createEventData(eventData) {
  try {
    // Crea el lugar primero
    const place = await Place.create(eventData.placeData);
    console.log(`Lugar creado: ${place.direction}`);

    // Asigna el placeId al evento
    eventData.placeId = place._id;

    const categoryIds = [];

    for (const categoryName of eventData.categories) {
      const category = await Category.findOne({ name: categoryName });

      if (category) {
        categoryIds.push(category._id);
      }
    }

    eventData.categories = categoryIds;

    const event = await Event.create(eventData);
    console.log(`Evento creado: ${event.title}`);
  } catch (error) {
    console.error('Error al crear el evento:', error);
  }
}

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Conexión exitosa a MongoDB.');

    for (const eventData of eventsData) {
      await createEventData(eventData);
    }

    mongoose.connection.close();
    console.log('Conexión cerrada.');
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
  });