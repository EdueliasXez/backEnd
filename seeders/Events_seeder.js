const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { Event, Category, Place } = require('../src/db');

dotenv.config();

const imageFiles = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

async function createRandomPlace() {
  try {
    const placeData = {
      country: 'USA', // Puedes personalizar esto
      city: 'Ciudad', // Puedes personalizar esto
      direction: 'Dirección', // Puedes personalizar esto
      postalCode: '12345', // Puedes personalizar esto
    };

    const place = await Place.create(placeData);
    console.log(`Lugar creado: ${place.direction}`);
    return place;
  } catch (error) {
    console.error('Error al crear el lugar:', error);
  }
}

async function createRandomEvent() {
  try {
    const randomCategory = await Category.aggregate([{ $sample: { size: 1 } }]);
    const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)];

    const place = await createRandomPlace();

    const eventData = {
      title: 'Título del evento', // Puedes personalizar esto
      summary: 'Resumen del evento', // Puedes personalizar esto
      price: parseFloat(Math.random() * 1000).toFixed(2),
      stock: Math.floor(Math.random() * 100) + 1,
      date: new Date(), // Puedes personalizar esto
      images: [`/images/${randomImage}`],
      active: true,
      categories: [randomCategory[0]._id],
      placeId: place._id,
    };

    const event = await Event.create(eventData);
    console.log(`Evento creado: ${event.title}`);
  } catch (error) {
    console.error('Error al crear el evento:', error);
  }
}

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a MongoDB.');
    const promises = Array.from({ length: 10 }, () => createRandomEvent());
    return Promise.all(promises);
  })
  .then(() => {
    mongoose.connection.close();
    console.log('Conexión cerrada.');
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
  });
