const mongoose = require('mongoose');
require("dotenv").config(); 
const Category = require('../src/models/Category'); 

const MONGO_URI = process.env.MONGO_URI; 

console.log(MONGO_URI);

const categoriesData = [
    {
      name: 'Salud y Bienestar',
      description: 'Eventos relacionados con la salud física y mental, como yoga y meditación.',
    },
    {
      name: 'Educación',
      description: 'Charlas y talleres educativos sobre una variedad de temas académicos.',
    },
    {
      name: 'Negocios y Emprendimiento',
      description: 'Eventos para emprendedores y profesionales de los negocios.',
    },
    {
      name: 'Ecología y Sostenibilidad',
      description: 'Eventos enfocados en la protección del medio ambiente y la sostenibilidad.',
    },
    {
        name: 'Ciencia y Tecnología',
        description: 'Conferencias y eventos sobre exploración espacial y ciencia espacial.',
      },
      {
        name: 'Artes Escénicas',
        description: 'Eventos de teatro, danza, ópera y otros espectáculos en vivo.',
      },
      {
        name: 'Debates y Política',
        description: 'Debates políticos y eventos relacionados con la actualidad política.',
      },
      {
        name: 'Conciertos',
        description: 'Eventos musicales en vivo y espectáculos de artistas reconocidos.',
      },
      {
        name: 'Comedia',
        description: 'Espectáculos de comedia en vivo y noches de risas.',
      },
      {
        name: 'Eventos Familiares',
        description: 'Actividades y eventos para toda la familia.',
      },
      {
        name: 'Eventos Deportivos',
        description: 'Competencias y eventos de deportes.',
      },
      {
        name: 'Exposiciones de Arte',
        description: 'Exhibiciones de arte contemporáneo y clásico.',
      },
      {
        name: 'Ferias Locales',
        description: 'Ferias de productos locales y artesanías.',
      },
      {
        name: 'Cine y Entretenimiento',
        description: 'Proyecciones de películas, eventos de entretenimiento y espectáculos.',
      },
      {
        name: 'Moda',
        description: 'Desfiles de moda y eventos relacionados con la industria textil.',
      },
      {
        name: 'Festivales',
        description: 'Festivales de música, comida, cine y más para disfrutar en comunidad.',
      },
        {
        name: 'Gastronomía',
        description: 'Eventos culinarios y degustaciones de comida.',
      },
  ];
  
async function seedCategories() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Conexión a MongoDB establecida');

    await Category.create(categoriesData);

    console.log('Categorías insertadas correctamente');
  } catch (error) {
    console.error('Error al insertar categorías:', error);
  } finally {
    mongoose.connection.close();
  }
}

seedCategories();
