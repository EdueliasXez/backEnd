const eventsData = [
    {
        title: 'Festival Gastronómico de Repostería en Buenos Aires',
        summary: '¡Únete a nosotros en el festival gastronómico de Repostería de Buenos Aires! Disfruta de una amplia variedad de platos deliciosos, chefs de renombre y música en vivo. ¡No te lo pierdas!',
        price: 50.00,
        stock: 100,
        date: new Date('2023-10-15T14:00:00Z'),
        images: ['https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695848681/Events/Gatronom%C3%ADa/ibrahim-boran-weg93vRGgGk-unsplash_s2ax05.jpg', 
        'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695848679/Events/Gatronom%C3%ADa/liz-pullan-pattathy-M4lY08ucZz8-unsplash_k5yx3k.jpg', 
        'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695848680/Events/Gatronom%C3%ADa/daniel-lee-GfVYwJUziVE-unsplash_glgnoo.jpg'],
        active: true,
        categories: ['Gastronomía', 'Festivales'], 
        placeData: {
          country: 'Argentina',
          city: 'Buenos Aires',
          direction: 'Calle Principal 123',
          postalCode: '12345',
          dateAndTime: {
            date: new Date('2023-10-15T14:00:00Z'),
            time: '10:00 AM',
          },
        },
      },
      {
        title: 'Retiro de Yoga en la Playa',
        summary: 'Únete a nuestro retiro de yoga en la hermosa costa de Tulum, México. Disfruta de la paz y la tranquilidad mientras practicas yoga frente al mar y te conectas contigo mismo.',
        price: 80.00,
        stock: 50,
        date: new Date('2023-11-20T08:00:00Z'),
        images: [
            'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695849029/Events/Eventos%20deportivos/kaylee-garrett-GaprWyIw66o-unsplash_kjwarl.jpg',
            'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695849029/Events/Eventos%20deportivos/nick-fewings-Of8XhtKP-Us-unsplash_gvgjpp.jpg',
            'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695849029/Events/Eventos%20deportivos/photo-genius-I749-lKHHJ4-unsplash_ruabum.jpg'
        ],
        active: true,
        categories: ['Salud y Bienestar', 'Eventos Deportivos'], 
        placeData: {
          country: 'México', 
          city: 'Tulum', 
          direction: 'Playa Principal 456',
          postalCode: '54321',
          dateAndTime: {
            date: new Date('2023-11-20T08:00:00Z'),
            time: '6:00 AM',
          },
        },
      },
      {
        title: 'Conferencia sobre Historia Antigua',
        summary: 'Acompáñanos en esta conferencia educativa sobre la historia antigua. Exploraremos civilizaciones perdidas, descubrimientos arqueológicos y misterios del pasado.',
        price: 25.00,
        stock: 75,
        date: new Date('2023-09-30T15:30:00Z'),
        images: [
            'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695849313/Events/Educaci%C3%B3n/giammarco-boscaro-zeH-ljawHtg-unsplash_zdlvz0.jpg',
            'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695849320/Events/Educaci%C3%B3n/andrew-neel-1-29wyvvLJA-unsplash_gi5tpb.jpg',
            'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695849313/Events/Educaci%C3%B3n/mr-cup-fabien-barral-Fo5dTm6ID1Y-unsplash_nwwnzs.jpg',
            'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695849319/Events/Educaci%C3%B3n/phil-goodwin-gWrxqChFf1Y-unsplash_gy6wcc.jpg'
        ],
        active: true,
        categories: ['Educación', 'Eventos Familiares'], 
        placeData: {
          country: 'Perú', 
          city: 'Lima', 
          direction: 'Avenida Historica 789',
          postalCode: '67890',
          dateAndTime: {
            date: new Date('2023-09-30T15:30:00Z'),
            time: '2:30 PM',
          },
        },
      },
      {
        title: 'Conferencia Espacial: Explorando el Universo',
        summary: 'Únete a esta fascinante conferencia sobre la exploración espacial y los misterios del universo. Conocerás los últimos descubrimientos y avances en la ciencia espacial.',
        price: 35.00,
        stock: 60,
        date: new Date('2023-10-10T19:00:00Z'),
        images: ['/images/event4.jpg'],
        active: true,
        categories: ['Ciencia y Tecnología', 'Eventos Familiares'], 
        placeData: {
          country: 'Chile', 
          city: 'Valparaiso', 
          direction: 'Avenida Espacial 1234',
          postalCode: '56789',
          dateAndTime: {
            date: new Date('2023-10-10T19:00:00Z'),
            time: '5:00 PM',
          },
        },
      },
      {
        title: 'Noche de Ópera: La Traviata',
        summary: 'Disfruta de una noche mágica en el teatro con la presentación de la ópera clásica "La Traviata". Déjate llevar por la emotiva música y la impresionante actuación en escena.',
        price: 60.00,
        stock: 40,
        date: new Date('2023-11-05T20:00:00Z'),
        images: ['/images/event5.jpg'],
        active: true,
        categories: ['Artes Escénicas'], 
        placeData: {
          country: 'Argentina', 
          city: 'Buenos Aires', 
          direction: 'Teatro Nacional 123',
          postalCode: '43210',
          dateAndTime: {
            date: new Date('2023-11-05T20:00:00Z'),
            time: '6:00 PM',
          },
        },
      },
      {
        title: 'Festival de Salsa y Ritmos Latinos',
        summary: 'Únete al festival más grande de salsa y ritmos latinos en Cali, Colombia. Baila toda la noche al son de la música latina, disfruta de deliciosa comida y diversión sin parar.',
        price: 45.00,
        stock: 80,
        date: new Date('2023-10-28T18:00:00Z'),
        images: ['/images/event6.jpg'],
        active: true,
        categories: ['Festivales'], 
        placeData: {
          country: 'Colombia', 
          city: 'Cali',
          direction: 'Plaza de Eventos 789',
          postalCode: '98765',
          dateAndTime: {
            date: new Date('2023-10-28T18:00:00Z'),
            time: '4:00 PM',
          },
        },
      },
      {
        title: 'Festival Gastronómico: Sabores de México',
        summary: 'Descubre los auténticos sabores de México en este festival gastronómico. Prueba una variedad de platillos mexicanos, desde tacos hasta chiles en nogada.',
        price: 30.00,
        stock: 70,
        date: new Date('2023-10-22T12:00:00Z'),
        images: ['/images/event7.jpg'],
        active: true,
        categories: ['Gastronomía', 'Eventos Familiares'], 
        placeData: {
          country: 'México', 
          city: 'Ciudad de México', 
          direction: 'Plaza de la Comida 567',
          postalCode: '34567',
          dateAndTime: {
            date: new Date('2023-10-22T12:00:00Z'),
            time: '10:00 AM',
          },
        },
      },
      {
        title: 'Debate sobre el Futuro de la Política',
        summary: 'Únete a este debate crucial sobre el futuro de la política en América Latina. Destacados analistas y políticos discutirán los desafíos y oportunidades en la región.',
        price: 0.00, 
        stock: 120,
        date: new Date('2023-11-10T19:30:00Z'),
        images: ['/images/event8.jpg'],
        active: true,
        categories: ['Debates y Política'], 
        placeData: {
          country: 'Chile', 
          city: 'Santiago', 
          direction: 'Centro de Convenciones 456',
          postalCode: '87654',
          dateAndTime: {
            date: new Date('2023-11-10T19:30:00Z'),
            time: '5:30 PM',
          },
        },
      },
      {
        title: 'Concierto en Vivo: Banda Tropical',
        summary: 'Disfruta de una noche llena de música en vivo con la famosa Banda Tropical. Baila al ritmo de sus éxitos y crea recuerdos inolvidables.',
        price: 35.00,
        stock: 60,
        date: new Date('2023-10-29T21:00:00Z'),
        images: ['/images/event9.jpg'],
        active: true,
        categories: ['Conciertos'], 
        placeData: {
          country: 'Perú', 
          city: 'Lima', 
          direction: 'Estadio Musical 789',
          postalCode: '23456',
          dateAndTime: {
            date: new Date('2023-10-29T21:00:00Z'),
            time: '7:00 PM',
          },
        },
      },
      {
        title: 'Noche de Risas: Stand-up Comedy',
        summary: 'Prepárate para una noche llena de risas con los comediantes más divertidos de la región. Sus ocurrencias y chistes te harán reír sin parar.',
        price: 25.00,
        stock: 50,
        date: new Date('2023-11-18T20:30:00Z'),
        images: ['/images/event10.jpg'],
        active: true,
        categories: ['Comedia'], 
        placeData: {
          country: 'Colombia',
          city: 'Medellín',
          direction: 'Teatro de la Comedia 123',
          postalCode: '54321',
          dateAndTime: {
            date: new Date('2023-11-18T20:30:00Z'),
            time: '6:30 PM',
          },
        },
      }
  ];
  
  module.exports = eventsData;
  