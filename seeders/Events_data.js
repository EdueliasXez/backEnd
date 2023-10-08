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
        categories: ['Gastronomía'], 
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
        categories: ['Eventos Deportivos'], 
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
        categories: ['Exposiciones de Arte'], 
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
        images: [
          'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCQHCknJ80PmX43ZCgspe2zn_OLkF0pRzxcXjZ1QOHIrys0nUNPsj9UOgEFWyG9dup5z9dhtNbbA0NU_8vDUtFZZd2gOmw9OzHo7REZsd8s9x5eHXXW_tjKCe_sL9YweyX7ByXtLk05nwqf0rghXpQt_IFpIksCDXdJY8O1nKoMkpCm1uKCyCjIBtT4A/s1920/slide-evento-voyayer-2023-001.jpg',
          'https://www.elvigia.net/u/fotografias/m/2019/2/6/f1280x720-398461_530136_5050.jpg',
          'https://media.es.wired.com/photos/650337a9a678a8681335ad55/16:9/w_2560%2Cc_limit/telescopio%2520en%2520la%2520luna%2520futuro.jpg'
        ],
        active: true,
        categories: ['Ciencia y Tecnología'], 
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
        images: [
          'https://dating101sydney.files.wordpress.com/2012/03/poster.jpg',
          'https://1.bp.blogspot.com/-p-UEWsPhkWM/WJ4QkU7rATI/AAAAAAAAHVA/T5I01J-mtpwZ5Fugo5PKJQZYsbnlMcVJACEw/s1600/Traviata034.jpg',
          'https://www.operaactual.com/wp-content/uploads/2020/03/traviata-operaactual-met--e1584960023979.jpg'
        ],
        active: true,
        categories: ['Exposiciones de Arte'], 
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
        images: [
          'https://www.amexessentials.com/wp-content/uploads/2018/08/opener-salsa-festival-cali.jpg',
          'https://danzaenlaciudad.gov.co/sites/default/files/img/Lanzamiento_Salsaal_Parque_%40_juan_santacruz_-13.jpg',
          'https://estaticos.elcolombiano.com/documents/10157/0/960x522/90c0/780d522/none/11101/NMIH/image_content_34755792_20191205112644.jpg'
        ],
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
        images: [
          'https://cdn.colombia.com/sdi/2021/11/18/festival-de-comida-mexicana-en-colombia-971862.jpg',
          'https://img.chilango.com/2023/08/festival-gastronomico-sabores-y-artesanias-de-mexico.jpg',
          'https://img.chilango.com/2023/08/festival-gastronomico-sabores-y-artesanias-de-mexico.jpg'
        ],
        active: true,
        categories: ['Gastronomía'], 
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
        images: [
          'https://cloudfront-us-east-1.images.arcpublishing.com/semana/WAZ33IATSJDJZNHN4YMVV5BQRE.jpg',
          'https://www.wradio.com.co/resizer/kgJGvTZ3hytZudkngeQHJRLh3Q4=/650x488/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/CEN3XX2PEJBU3PDGD5RBZV2TR4.jpg',
          'https://caracol.com.co/resizer/Af-biuyQXJFrE8iDOPlRHb4dyY4=/650x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/LRQTKQORJJHRVOM6BTEZMUI6A4.jpg'
        ],
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
        images: [
          'https://calicreativa.com/wp-content/uploads/CB_FEP2018_Thekillers_003-min.jpg',
          'https://caracol.com.co/resizer/uwV8k-GWZdQTY6opfki-oppQ9sg=/1600x900/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/ERSC3WXJ4KBGB4EJFZLZ4QAIBQ.jpg',
          'https://cloudfront-us-east-1.images.arcpublishing.com/semana/HK6WC5OST5DMLOV47HDSZXNFFY.jpg'
        ],
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
        images: [
          'https://latiquetera.com/img/attach/Event/726/19884/event_normal.5b9cc6745b7f54a28ad2c0cab9100aaa.jpg',
          'https://escuelastandupclub.com/wp-content/uploads/2021/10/gente-aplaudiendo-monologo.jpg',
          'https://infolocal.comfenalcoantioquia.com/media/com_jbusinessdirectory/pictures/events/10349/en_flagrancia.jpg'
        ],
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
      },
      { 
        title: 'Concierto de rock: Metallica',
        summary: 'Metallica, la banda de heavy metal más exitosa de todos los tiempos, regresa a la Ciudad de México para una serie de conciertos. No te pierdas la oportunidad de ver a estos íconos del rock en vivo',
        price: 50.00,
        stock: 10,
        date: new Date('2023-12-18T20:30:00Z'),
        images: [
          'https://c8.alamy.com/compes/jxee7b/vancouver-canada-14-aug-2017-banda-de-heavy-metal-estadounidense-metallica-realice-durante-su-worldwired-tour-en-el-bc-place-stadium-de-vancouver-bc-canada-credito-jamie-taylor-alamy-live-news-jxee7b.jpg',
          'https://www.shutterstock.com/shutterstock/photos/605599376/display_1500/stock-photo-hong-kong-january-american-heavy-metal-band-metallica-show-vocalist-james-hetfield-605599376.jpg',
          'https://c8.alamy.com/compes/e3yawj/metallica-actua-en-el-festival-de-musica-de-glastonbury-inglaterra-el-sabado-28-de-junio-de-2014-e3yawj.jpg'
        ],
        active: true,
        categories: ['Conciertos'], 
        placeData: {
          country: 'México',
          city: 'Ciudad de México',
          direction: 'Foro Sol',
          postalCode: '06459',
          dateAndTime: {
            date: new Date('2023-12-18T20:30:00Z'),
            time: '5:30 PM',
          },
        },
      },
      {
        title: 'Obra de teatro: Hamlet',
        summary: 'Hamlet, una de las obras de teatro más famosas de Shakespeare, llega a la Ciudad de México en una nueva producción. No te pierdas esta oportunidad de ver esta obra maestra en vivo.',
        price: 55.00,
        stock: 500,
        date: new Date('2023-10-18T20:30:00Z'),
        images: [
          'https://s1.abcstatics.com/media/cultura/2016/04/29/Hamlet0--620x349.jpg',
          'https://static.hoy.es/www/multimedia/201708/02/media/114834745.jpg',
          'https://www.diarioronda.es/wp-content/uploads/2016/10/hanlet2.jpg'
        ],
        active: true,
        categories: ['Artes escénicas'], 
        placeData: {
          country: 'México',
          city: 'Ciudad de México',
          direction: 'Teatro Insurgentes',
          postalCode: ' 06400',
          dateAndTime: {
            date: new Date('2023-10-18T20:30:00Z'),
            time: '7:30 PM',
          },
        },
      },
      {
        title: 'Festival de cine: Cine de terror mexicano',
        summary: 'Descubre lo mejor del cine de terror mexicano en este festival. Podrás ver películas clásicas y nuevas, así como participar en talleres y mesas redondas.',
        price: 150.00,
        stock: 300,
        date: new Date('2024-03-18T20:30:00Z'),
        images: [
          'https://www.ecartelera.com/carteles/13800/13861/001_p.jpg',
          'https://www.infobae.com/new-resizer/cTmXDsOpxSs9HFxoHw1nuGFG20c=/arc-anglerfish-arc2-prod-infobae/public/36LSJIMSG5A6TPFJNWHOMJDP6Y.jpg',
          'https://www.elsoldehidalgo.com.mx/local/regional/kjazby-cineterror03-1_cmyk.jpg/ALTERNATES/LANDSCAPE_1140/CINETERROR03%20(1)_CMYK.jpg'
        ],
        active: true,
        categories: ['Cine y Entretenimiento'], 
        placeData: {
          country: 'México',
          city: 'Ciudad de México',
          direction: 'Cineteca Nacional',
          postalCode: ' 06040',
          dateAndTime: {
            date: new Date('2024-o6-18T20:30:00Z'),
            time: '8:30 PM',
          },
        },
      },
      {
        title: 'Festival de Música en la Playa',
        summary: 'Únete a nosotros para un emocionante festival de música en la hermosa playa de Cancún. Disfruta de bandas locales e internacionales mientras te relajas en la arena.',
        price: 70.00,
        stock: 100,
        date: new Date('2024-08-18T20:30:00Z'),
        images: [
          'https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradiolos40/HITFITFAG5KXZCYOU5AX2OICHQ.jpg',
          'https://dospuntosrevista.com/wp-content/uploads/2019/11/jazz_rivieramaya_playa_mamita.jpg',
          'https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradiolos40/XTIUGWR5CBMNPOCADAGTCNH26M.jpg'
        ],
        active: true,
        categories: ['Conciertos'], 
        placeData: {
          country: 'Costa Rico',
          city: 'Puntarenas',
          direction: 'Tamarindo',
          postalCode: '54311',
          dateAndTime: {
            date: new Date('2024-02-18T20:30:00Z'),
            time: '3:30 PM',
          },
        },
      },
      {
        title: 'Exposición de Arte Contemporáneo',
        summary: 'Sumérgete en el mundo del arte contemporáneo con esta exposición exclusiva. Descubre las obras más innovadoras de artistas de toda América Latina.',
        price: 15.00,
        stock: 75,
        date: new Date('2024-04-18T20:30:00Z'),
        images: [
          'https://imagenes.elpais.com/resizer/tan5sJ4atBWzyH3ZfeyDB6V1sp0=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/7FBBCQZAIVHMBLZXMMCT2NQWFM.jpg',
          'https://media.timeout.com/images/105551869/image.jpg',
          'https://poble-espanyol.com/wp-content/uploads/2023/01/Poble-Espanyol-Exposicion-barcelona.jpg'
        ],
        active: true,
        categories: ['Artes Escénicas'], 
        placeData: {
          country: 'Argentina',
          city: 'Buenos Aires',
          direction: ' Galeo',
          postalCode: '56321',
          dateAndTime: {
            date: new Date('2024-05-18T20:30:00Z'),
            time: '2:00 PM',
          },
        },
      },
      {
        title: 'Arte Vanguardista: Una Mirada al Futuro',
        summary: 'Descubre la creatividad y la innovación en el mundo del arte moderno en esta exposición única. Explora obras de artistas visionarios que están redefiniendo el arte contemporáneo.',
        price: 70.00,
        stock: 250,
        date: new Date('2024-05-18T20:30:00Z'),
        images: [
          'https://www.descubrirelarte.es/wp-content/uploads/2015/10/021.jpg',
          'https://www.diariodesevilla.es/2011/09/08/ocio/Luis-Martin-Lozano-exposicion-Retrato-Voloshin_513258710_107852597_1200x675.jpg',
          'https://tiposdearte.com/wp-content/uploads/2015/03/Arte-vanguardista.jpg'
        ],
        active: true,
        categories: ['Exposiciones de Arte'], 
        placeData: {
          country: 'Republica Dominicana',
          city: 'Puerto Plata',
          direction: ' Calle del Arte',
          postalCode: '74321',
          dateAndTime: {
            date: new Date('2024-03-18T20:30:00Z'),
            time: '3:30 PM',
          },
        },
      },
      {
        title: 'Celebración Vinícola: Vendimia 2023',
        summary: 'Únete a nosotros en la fiesta anual de la vendimia donde podrás degustar los mejores vinos de la región. Disfruta de música en vivo y comida gourmet.',
        price: 40.00,
        stock: 80,
        date: new Date('2023-12-18T20:30:00Z'),
        images: [
          'https://www.vinistas.com/blog-de-vinos/wp-content/uploads/2023/08/Im%C3%A1genes-blog.jpg',
          'https://www.vinetur.com/imagenes/2023/septiembre/27/calatayud_wine_vendimia_2023_01.jpg',
          'https://lasillarota.com/u/fotografias/m/2023/8/25/f638x638-481650_539817_5050.jpg'
        ],
        active: true,
        categories: ['Gastronomía'], 
        placeData: {
          country: 'Chile',
          city: 'Santiago',
          direction: 'Viñedo Los Andes, Camino de la Vendimia',
          postalCode: '94326',
          dateAndTime: {
            date: new Date('2023-12-18T20:30:00Z'),
            time: '2:00 PM',
          },
        },
      },
      {
        title: 'Leyendas del Rock: Concierto Épico',
        summary: 'Prepárate.',
        price: 45.00,
        stock: 60,
        date: new Date('2023-10-18T20:30:00Z'),
        images: [
          'https://www.rocknvivo.com/wp-content/uploads/2009/08/dorso-leyendas.jpg',
          'https://elperiodicodevillena.com/wp-content/uploads/2022/08/Opeth.jpg',
          'https://www.rockculture.es/wp-content/uploads/2023/08/bullet-for-my-valentine-rc-7526-1.jpg'
        ],
        active: true,
        categories: ['Conciertos'], 
        placeData: {
          country: ' Argentina',
          city: 'Buenos Aires',
          direction: 'Estadio Rock Arena, Calle del Rock',
          postalCode: '54331',
          dateAndTime: {
            date: new Date('2023-10-18T20:30:00Z'),
            time: '5:30 PM',
          },
        },
      },
      {
        title: 'Cine Global: Festival de Películas Extranjeras',
        summary: 'Explora lo mejor del cine internacional con proyecciones exclusivas de películas de todo el mundo. Conoce a cineastas y actores internacionales.',
        price: 20.00,
        stock: 120,
        date: new Date('2024-07-18T20:30:00Z'),
        images: [
          'https://image.isu.pub/200421212136-e4f111ed3bd04e284b6e915d16786b9a/jpg/page_1.jpg',
          'https://pbs.twimg.com/media/DyN9sWuUcAAWYht.jpg',
          'https://funglode.org/wp-content/uploads/2023/01/portada-festival-Cine2.jpg'
        ],
        active: true,
        categories: ['Cine y Entretenimiento'], 
        placeData: {
          country: 'España',
          city: 'Madrid',
          direction: 'Teatro Internacional, Carrer del Cine',
          postalCode: '55321',
          dateAndTime: {
            date: new Date('2024-07-18T20:30:00Z'),
            time: '6:15 PM',
          },
        },
      },
      {
        title: 'Batalla Virtual: Torneo de Esports',
        summary: 'Únete a la competencia en los juegos de esports más populares del momento. Grandes premios y emoción asegurados',
        price: 15.00,
        stock: 100,
        date: new Date('2024-06-18T20:30:00Z'),
        images: [
          'https://img.freepik.com/fotos-premium/videojuego-torneo-premios-copa-campeon-juegos-ciencia-ficcion-rojo-azul-vs-fondo-esports-vr-simulacion-realidad-virtual-soporte-escena-metaverso-escenario-pedestal-representacion-ilustracion-3d_42100-3306.jpg',
          'https://c8.alamy.com/compes/2pt9de6/mujer-llevar-auriculares-de-juego-jugando-esports-consola-de-juegos-sala-de-juegos-gamer-utilizando-el-controlador-de-joystick-para-el-torneo-de-carreras-juega-en-linea-de-videojuegos-wi-2pt9de6.jpg',
          'https://itti.es/wp-content/uploads/2022/11/pexels-rodnae-productions-7915493.jpg'
        ],
        active: true,
        categories: ['Eventos Deportivos'], 
        placeData: {
          country: 'Guatemala',
          city: 'Ciudad de Guatemala',
          direction: 'Arena Esports, Calle de los Jugadores ',
          postalCode: '54771',
          dateAndTime: {
            date: new Date('2024-06-18T20:30:00Z'),
            time: '9:30 AM',
          },
        },
      },
      {
        title: 'Festival de Música Electrónica: Energía Electrónica 2024',
        summary: 'Experimenta la mejor música electrónica en un festival lleno de luces y sonidos impresion',
        price: 45.00,
        stock: 200,
        date: new Date('2024-07-18T20:30:00Z'),
        images: [
          'https://rtvc-informativo.s3.amazonaws.com/SicoDelia-el-festival-de-musica-electronica-artes-visuales-y-tecnologia-del-CNA.jpg',
          'https://2.bp.blogspot.com/-wuV6gGSU1N4/V7syAipsAhI/AAAAAAAAASk/dKNGZMLbtUgu19Fm_O97n7_Tix_EYRzcwCLcB/s1600/electronicaa.jpg',
          'https://i.ytimg.com/vi/1XnxErwDROA/hqdefault.jpg'
        ],
        active: true,
        categories: ['Conciertos'], 
        placeData: {
          country: 'Colombia',
          city: 'Bogota',
          direction: 'Parque Salitre Mágico',
          postalCode: '54771',
          dateAndTime: {
            date: new Date('2024-07-18T20:30:00Z'),
            time: '6:30 PM',
          },
        },
      },
      {
        title: 'Partido de fútbol: América vs. Chivas',
        summary: 'El clásico del fútbol mexicano regresa a la Ciudad de México. No te pierdas este partido imperdible entre dos de los equipos más populares del país.',
        price: 20.00,
        stock: 190,
        date: new Date('2024-05-18T20:30:00Z'),
        images: [
          'https://i.ytimg.com/vi/TEFrwdxbAUo/maxresdefault.jpg',
          'https://i.ytimg.com/vi/Nt7TtCKCbAo/hqdefault.jpg',
          'https://img.vavel.com/copia-de-qatar-16-1694812328408.jpg'
        ],
        active: true,
        categories: ['Eventos Deportivos'], 
        placeData: {
          country: ' México',
          city: 'Ciudad de México',
          direction: 'Estadio Azteca',
          postalCode: '54700',
          dateAndTime: {
            date: new Date('2024-05-18T20:30:00Z'),
            time: '4:30 PM',
          },
        },
      },
      {
        title: 'Festival de Circo: Mundo Mágico 2024',
        summary: 'Disfruta de un día lleno de magia y diversión en el festival de circo Mundo Mágico 2024. Con actuaciones de artistas de todo el mundo, Mundo Mágico es el evento perfecto para toda la familia',
        price: 35.00,
        stock: 80,
        date: new Date('2024-02-18T20:30:00Z'),
        images: [
          'https://www.ifema.es/img/xl/cartel-circlassica/que-es-circlassica.jpg',
          'https://estaticos-cdn.prensaiberica.es/clip/20af09db-e043-4325-81b1-0ad62e36b4e9_16-9-discover-aspect-ratio_default_0.jpg',
          'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/FLGCSCQWPNEYHLIG4HW6ENIJNI.jpg'
        ],
        active: true,
        categories: ['Eventos Familiares'], 
        placeData: {
          country: 'Argentina',
          city: 'Posadas',
          direction: 'Parque Principal',
          postalCode: '54771',
          dateAndTime: {
            date: new Date('2024-02-18T20:30:00Z'),
            time: '3:00 PM',
          },
        },
      },
      {
        title: 'Festival de música infantil: Canta y baila',
        summary: 'Disfruta de un día lleno de música y baile en el festival de música infantil Canta y baila 2024. Con actuaciones de artistas infantiles de todo el mundo, Canta y baila es el evento perfecto para que los niños disfruten de la música.',
        price: 60.00,
        stock: 40,
        date: new Date('2023-12-18T20:30:00Z'),
        images: [
          'https://i.ytimg.com/vi/Xm26F446M28/maxresdefault.jpg',
          'https://www.cosasdepeques.com/wp-content/uploads/canciones-ninos-ambientar-fiesta-cumpleanos.jpg',
          'https://www.neurita.com/wp-content/uploads/2022/04/La-importancia-de-las-fiestas-infantiles-segun-la-psicologia.jpg'
        ],
        active: true,
        categories: ['Eventos Familiares'], 
        placeData: {
          country: 'Argentina',
          city: 'Buenos Aires',
          direction: 'Av. Olivos ',
          postalCode: '34771',
          dateAndTime: {
            date: new Date('2023-12-18T20:30:00Z'),
            time: '8:30 AM',
          },
        },
      },
      {
        title: 'Espectáculo teatral: Cuentos para soñar',
        summary: 'Sumérgete en un mundo de fantasía en el espectáculo teatral Cuentos para soñar 2024. Con cuentos clásicos y originales, Cuentos para soñar es el evento perfecto para que los niños disfruten de la magia del teatro.',
        price: 90.00,
        stock: 300,
        date: new Date('2024-10-18T20:30:00Z'),
        images: [
          'https://festivaldecabaret.com/wp-content/uploads/2023/06/Cuentos-para-no-dejar-de-sonar-cover-1024x768-1024x585.jpg',
          'https://carteleradeteatro.mx/wp-content/uploads/2022/08/cuentos-talia_300.jpg',
          'https://cdnvos.lavoz.com.ar/sites/default/files/styles/width_1072/public/agenda/cuentosycan_1689269426.jpg'
        ],
        active: true,
        categories: ['Artes Escénicas'], 
        placeData: {
          country: 'Perú',
          city: 'Lima',
          direction: 'Teatro Municipal de Lima',
          postalCode: '54701',
          dateAndTime: {
            date: new Date('2024-10-18T20:30:00Z'),
            time: '2:45 pm',
          },
        },
      },
      {
        title: 'Exposición de arte: Imaginación al poder',
        summary: 'Explora el mundo de la imaginación en la exposición de arte Imaginación al poder. Con obras de arte de artistas de todo el mundo, Imaginación al poder es el evento perfecto para que los niños desarrollen su creatividad.',
        price: 75.00,
        stock:80,
        date: new Date('2024-10-18T20:30:00Z'),
        images: [
          'https://www.semana.com/resizer/OH8PPvqPUeuZha7vgAks2e5LPBc=/1280x0/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/DRYQKVTBVNBCJICU5LWSKI7S5I.jpg',
          'https://museolazarogaldiano.files.wordpress.com/2020/12/gran_cabeza_detalle_vision_tondal_museo_lazaro_galdiano.jpg',
          'https://www.innovaspain.com/wp-content/uploads/2016/05/detallejdld.jpg'
        ],
        active: true,
        categories: ['Exposiciones de Arte'], 
        placeData: {
          country: 'Chile',
          city: 'Santiago',
          direction: ' Museo de Bellas Artes de Santiago ',
          postalCode: '54711',
          dateAndTime: {
            date: new Date('2024-06-18T20:30:00Z'),
            time: '2:50 PM',
          },
        },
      },
      {
        title: 'Festival de comida: GastroFest',
        summary: 'Saborea la mejor comida  en este festival. Podrás probar platillos de todo el país, así como participar en clases de cocina y demostraciones',
        price: 75.00,
        stock: 850,
        date: new Date('2024-09-18T20:30:00Z'),
        images: [
          'https://cdn.forbes.com.mx/2022/09/jason-leung-eKZLpj7U0E-unsplash-1-e1664303528834-1024x967.jpg',
          'https://www.corrienteshoy.com/galeria/fotos/2023/09/14/o_83b363829cbbed4337b31ea6bebe38cb.jpg',
          'https://www.buengusto.co/wp-content/uploads/2022/08/Fotos-Cortes%C3%ADa-CCB-11.jpg'
        ],
        active: true,
        categories: ['Gastronomia'], 
        placeData: {
          country: 'Argentina',
          city: 'Salta',
          direction: 'Central salta',
          postalCode: '14771',
          dateAndTime: {
            date: new Date('2024-09-18T20:30:00Z'),
            time: '11:30 AM',
          },
        },
      },
      {
        title: 'Exposición de arte: La magia del surrealismo',
        summary: 'Descubre el mundo surrealista de Salvador Dalí, René Magritte y otros artistas en esta exposición de arte. Con obras de arte que desafiaban la realidad, "La magia del surrealismo" es una experiencia que no olvidarás.',
        price: 100.00,
        stock: 100,
        date: new Date('2024-11-18T20:30:00Z'),
        images: [
          'https://www.stylefeelfree.com/wp-content/uploads/2021/02/Remedios_Varo_StyleFeelFree-1.jpg',
          'https://artishockrevista.com/wp-content/uploads/2022/07/Eugenio-Granell-Los-blasones-magicos-del-vuelo-tropical-1947.-Coleccion-Fundacion-Eugenio-Granell-Santiago-de-Compostela-c-DACS-2021.jpg',
          'https://2.bp.blogspot.com/-D4al_sCWpdw/TzaySb7Yu9I/AAAAAAAAAAM/uBvHpUxChJU/s1600/Arte-surrealista1.jpg'
        ],
        active: true,
        categories: ['Exposiciones de Arte'], 
        placeData: {
          country: 'Argentina',
          city: 'Córdoba',
          direction: 'Museo Nacional de Arte',
          postalCode: '52741',
          dateAndTime: {
            date: new Date('2024-11-18T20:30:00Z'),
            time: '1:30 PM',
          },
        },
      },
      {
        title: 'Convención de cómics: La convención del cómic',
        summary: 'Conoce a tus artistas de cómics favoritos, compra cómics nuevos y participa en concursos y actividades en esta convención de cómics. Con invitados especiales como Stan Lee, Jim Lee y más, "La convención del cómic" es un evento que los fanáticos del cómic no se pueden perder',
        price: 58.00,
        stock: 70,
        date: new Date('2024-07-18T20:30:00Z'),
        images: [
          'https://www.eitmedia.mx/media/k2/items/cache/1e8a907d2a24eb714b620ee61bc31aef_XL.jpg',
          'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/07/22/Comic-Con.jpg',
          'https://frenchdistrict.com/californie-sud/wp-content/uploads/sites/5/2016/04/san-diego-comic-con.jpg'
        ],
        active: true,
        categories: ['Ferias Locales'], 
        placeData: {
          country: 'Argentina',
          city: 'Buenos Aires',
          direction: 'Centro Cultural Kirchner ',
          postalCode: '54379',
          dateAndTime: {
            date: new Date('2024-07-18T20:30:00Z'),
            time: '2:40 PM',
          },
        },
      },
      {
        title: 'Desafío de Olas: Campeonato de Surf Extremo',
        summary: 'Únete a los surfistas más intrépidos del mundo en un emocionante campeonato de surf en las legendarias olas de Costa Rica.',
        price: 35.00,
        stock: 400,
        date: new Date('2024-09-18T20:30:00Z'),
        images: [
          'https://as.com/deportes_accion/imagenes/2018/03/02/album/1520005634_940300_1520006508_album_grande.jpg',
          'https://www.uniminutoradio.com.co/wp-content/uploads/2018/10/Capitalinos.jpg',
          'https://labritany.com/wp-content/uploads/2023/01/Picsart_23-01-13_20-36-19-591-scaled.jpg'
        ],
        active: true,
        categories: ['Eventos Deportivos'], 
        placeData: {
          country: 'Costa Rica',
          city: 'Tamarindo',
          direction: 'Playa de las Olas, Pura Vida Beach',
          postalCode: '54891',
          dateAndTime: {
            date: new Date('2024-09-18T20:30:00Z'),
            time: '10:30 AM',
          },
        },
      },
      {
        title: 'Salto al Límite: Competencia de Paracaidismo',
        summary: 'Experimenta la adrenalina de saltar desde altitudes extremas en una competencia de paracaidismo que desafía los límites.',
        price: 70.00,
        stock: 250,
        date: new Date('2024-03-18T20:30:00Z'),
        images: [
          'https://guiafitness.com/wp-content/uploads/cursos-paracaidismo.jpg',
          'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800,h_600/https://www.playxlife.com/wp-content/uploads/2020/08/Sonrisa-1024x768.jpg',
          'https://images.squarespace-cdn.com/content/v1/5a7cc1fc914e6b8d66356864/1584910150796-YDIUYQ2GG37J1G5JYPMF/Madison_NIC-1.jpg'
        ],
        active: true,
        categories: ['Eventos Deportivos'], 
        placeData: {
          country: 'México',
          city: 'Cancún',
          direction: 'Centro de Paracaidismo Extremo, Carretera del Cielo ',
          postalCode: '43471',
          dateAndTime: {
            date: new Date('2024-03-18T20:30:00Z'),
            time: '7:30 AM',
          },
        },
      },
      {
        title: 'Desafío Vertical: Carrera de Montaña Extrema',
        summary: 'Enfrenta terrenos escarpados y paisajes impresionantes en una carrera de montaña extrema en la Patagonia Argentina.',
        price: 100.00,
        stock: 100,
        date: new Date('2024-03-18T20:30:00Z'),
        images: [
          'https://www.infobae.com/new-resizer/JMhF6zO1WHVE-5eOUZi6B57peLs=/arc-anglerfish-arc2-prod-infobae/public/AWU44RXMERCSZDE3D3VSDASA4Q.jpg',
          'https://www.infobae.com/new-resizer/M5d0q9qWl7geVs8P-a5SUrXOEUQ=/arc-anglerfish-arc2-prod-infobae/public/3YFOKKIXGZAW3K77GW6FF2AOCU.jpg',
          'https://carreraspormontana.com/images/2014/01/130728-su-kilianemelie_dsc0197.jpg'
        ],
        active: true,
        categories: ['Eventos Deportivos'], 
        placeData: {
          country: 'Argentina',
          city: 'San Carlos de Bariloche',
          direction: 'Base de la Montaña, Ruta de la Aventura',
          postalCode: '54571',
          dateAndTime: {
            date: new Date('2024-03-18T20:30:00Z'),
            time: '9:30 AM',
          },
        },
      },
      {
        title: 'Vuelo Sobre Ruedas: Torneo de Motocross Extremo',
        summary: ' Mira a los motociclistas más valientes enfrentarse en una competencia de motocross extrema en las dunas de Chile.',
        price: 25.00,
        stock: 300,
        date: new Date('2024-09-18T20:30:00Z'),
        images: [
          'https://img.freepik.com/fotos-premium/man-riding-dirt-bike-on-dirt-track-with-the-number-13-on-it_566493-5284.jpg',
          'https://img.asmedia.epimg.net/resizer/5abv_H10Z_aroMICSZ7aRZgbvhE=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/WVOTOM77SREU5FYZKA4FZ273CI.jpg',
          'https://www.latercera.com/resizer/2apX1U-hNuhb0sVXdQ4qE9EFto8=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/BDOMC45U4VFYHEFBKODRCFKBFQ.jpg'

        ],
        active: true,
        categories: ['Eventos Deportivos'], 
        placeData: {
          country: 'Chile',
          city: 'Iquique',
          direction: 'Arena de Motocross Extremo, Ruta de las Dunas',
          postalCode: '54221',
          dateAndTime: {
            date: new Date('2024-09-18T20:30:00Z'),
            time: '9:50 AM',
          },
        },
      },
      {
        title: 'Electrópolis: Festival de Sonidos Electrónicos',
        summary: 'Sumérgete en la experiencia musical electrónica más vibrante con DJs internacionales y espectaculares efectos visuales.',
        price: 50.00,
        stock: 500,
        date: new Date('2024-08-18T20:30:00Z'),
        images: [
          'https://img.freepik.com/fotos-premium/dj-mezcla-pista-escenario-festival-musica-vivo-ai-generativa_634053-3163.jpg',
          'https://static.lasprovincias.es/www/multimedia/201707/07/media/cortadas/martin-garrix-kgIC-U40302988418VQG-624x385@Las%20Provincias.jpg',
          'https://www.youredm.com/wp-content/uploads/2019/07/190721-174659-TML2019-Rudgrcom-AA7I1056.jpg'
        ],
        active: true,
        categories: ['Festivales'], 
        placeData: {
          country: 'Colombia',
          city: 'Medellin',
          direction: 'Parque Principal Medellin',
          postalCode: '54799',
          dateAndTime: {
            date: new Date('2024-08-18T20:30:00Z'),
            time: '10:30 AM',
          },
        },
      },
      {
        title: 'Noche de Jazz: Concierto al Aire Libre',
        summary: 'Disfruta de una noche mágica con melodías de jazz bajo las estrellas en un escenario al aire libre.',
        price: 30.00,
        stock: 100,
        date: new Date('2023-10-18T20:30:00Z'),
        images: [
          'https://cdn1.intriper.com/wp-content/uploads/2020/10/03195738/performance-3202707_640-1.jpg',
          'https://wrmx00.epimg.net/radio/imagenes/2023/04/10/sociedad/1681151175_696634_1681151437_noticia_normal.jpg',
          'https://socialestrespuntocero.mx/wp-content/uploads/2023/06/Jazz.jpg'
        ],
        active: true,
        categories: ['Cine y Entretenimiento'], 
        placeData: {
          country: 'Argentina',
          city: 'Buenos Aires',
          direction: 'Plaza del Jazz, Calle del Swing',
          postalCode: '54371',
          dateAndTime: {
            date: new Date('2023-10-18T20:30:00Z'),
            time: '8:30 PM',
          },
        },
      },
      {
        title: 'AudioExpertos: Feria de Sonido y Tecnología',
        summary: 'AudioExpertos: Feria de Sonido y Tecnología Descubre lo último en equipos de sonido, auriculares y sistemas de entretenimiento en una feria tecnológica.',
        price: 23.00,
        stock: 100,
        date: new Date('2023-11-18T20:30:00Z'),
        images: [
          'https://www.semana.com/resizer/exrvupCeyyfHIF9pk7VcvYMP1vU=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/CB7M6GACQFHEZP2DZHWCGKUMDA.jpg',
          'https://grupothunder.com/images/SONIDO-PROFESIONAL/Sonido_12.jpg',
          'https://images.neventum.com/posts/2015/277/thumb1024/aFIAL-MADRID-STANDS.jpg'
        ],
        active: true,
        categories: ['Ferias Locales'], 
        placeData: {
          country: 'Colombia',
          city: 'Bucaramanga',
          direction: 'Parque Central',
          postalCode: '28771',
          dateAndTime: {
            date: new Date('2023-11-18T20:30:00Z'),
            time: '2:00 PM',
          },
        },
      },
      {
        title: 'Rally Extremo: Aventura en los Andes',
        summary: 'Embárcate en una emocionante aventura de rally a través de los desafiantes terrenos de los Andes argentinos.',
        price: 200.00,
        stock: 400,
        date: new Date('2024-09-18T20:30:00Z'),
        images: [
          'https://cdn.motor1.com/images/mgl/koAk7Y/s3/porsche-911-prototypes-climb-volcano.jpg',
          'https://imgl.krone.at/scaled/2853001/v3c50ce/full.jpg',
          'https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/04/21/1331854682259_2/los-fans-a%C3%B1aden-otra-dimensi%C3%B3n-al-rally-argentina.jpg'
        ],
        active: true,
        categories: ['Ferias Locales'], 
        placeData: {
          country: 'Argentina',
          city: 'Mendoza',
          direction: 'Base de Rally, Ruta de la Aventura',
          postalCode: '54641',
          dateAndTime: {
            date: new Date('2024-09-18T20:30:00Z'),
            time: '8:00 AM',
          },
        },
      },
      {
        title: 'Deriva Máxima: Torneo de Drift',
        summary: 'Presencia impresionantes derrapes y maniobras de precisión en un torneo de drift en las calles de Sao Paulo',
        price: 30.00,
        stock: 300,
        date: new Date('2024-06-18T20:30:00Z'),
        images: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Team_Drift.jpg/640px-Team_Drift.jpg',
          'https://www.nitro.pe/images/2016/julio/drifting_historia.jpg',
          'https://elcomercio.pe/resizer/McXkpGcGdXakAM8UNGbr7NnQsI0=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/PBG4RBRTORCD3DYYN3P3WPNT2Y.jpg'
        ],
        active: true,
        categories: ['Eventos Deportivos'], 
        placeData: {
          country: 'Brasil',
          city: 'Sao Paulo',
          direction: 'Circuito de Deriva, Rua de la Velocidade',
          postalCode: '54881',
          dateAndTime: {
            date: new Date('2024-06-18T20:30:00Z'),
            time: '1:30 PM',
          },
        },
      },
      {
        title: 'Día en el Zoológico: Conoce a las Criaturas',
        summary: 'Los niños pueden aprender sobre la fauna del mundo con exhibiciones interactivas y actividades educativas.',
        price: 23.00,
        stock: 100,
        date: new Date('2023-10-18T20:30:00Z'),
        images: [
          'https://saposyprincesas.elmundo.es/wp-content/uploads/2021/09/Nin%CC%83a-en-el-zoo.jpg',
          'https://www.inecol.mx/inecol/images/ciencia_hoy/zoologicos/flamingos.jpg',
          'https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1637054088/xcmsi9pnmvbk41qjk3xp.jpg'
        ],
        active: true,
        categories: ['Eventos Familiartes'], 
        placeData: {
          country: 'Colombia',
          city: 'Cali',
          direction: 'Parque Zoológico Calimio',
          postalCode: '54501',
          dateAndTime: {
            date: new Date('2023-10-18T20:30:00Z'),
            time: '9:00 AM',
          },
        },
      },
      {
        title: 'Teatro de Títeres: Cuentos Mágicos',
        summary: 'Disfruta de una representación mágica de cuentos clásicos con coloridos títeres y actuaciones interactivas',
        price: 15.00,
        stock: 100,
        date: new Date('2023-11-18T20:30:00Z'),
        images: [
          'https://conocelahistoria.com/wp-content/uploads/2018/03/historia-del-teatro-de-titeres-1-1.jpg',
          'https://www.hoyesarte.com/wp-content/uploads/2017/08/El-rincon-de-los-titeres.jpg',
          'https://sevilla-b4f9.kxcdn.com/wp-content/uploads/2014/04/teatro-titeres-atalayaTNT-aseismanos-sevillaconlospeques.jpg'
        ],
        active: true,
        categories: ['Comedia'], 
        placeData: {
          country: 'Colombia',
          city: 'Bogotá',
          direction: 'Parque Nacional Enrique Olaya Herrera',
          postalCode: '54771',
          dateAndTime: {
            date: new Date('2023-11-18T20:30:00Z'),
            time: '7:30 AM',
          },
        },
      },
      {
        title: 'Concierto de Música Latina: Sabor Caribeño',
        summary: 'Disfruta de una noche llena de ritmos latinos con artistas destacados de la región',
        price: 85.00,
        stock: 120,
        date: new Date('2023-12-18T20:30:00Z'),
        images: [
            'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/07/02/16882579398477.jpg',
            'https://cdn.aarp.net/content/dam/aarp/politics/events-and-history/2019/02/1140-african-music-promo-esp.jpg',
            'https://www.eluniversal.com.co/sites/default/files/30B2VANVAN.jpg'
        ],
        active: true,
        categories: ['Conciertos'], 
        placeData: {
          country: 'República Dominicana',
          city: 'Santo Domingo',
          direction: 'Anfiteatro Nacional',
          postalCode: '54743',
          dateAndTime: {
            date: new Date('2023-12-18T20:30:00Z'),
            time: '7:40 PM',
          },
        },
      },
      {
        title: 'Exposición de Arte Latinoamericano Contemporáneo',
        summary: 'Explora las obras más recientes de reconocidos artistas latinoamericanos en esta emocionante exposición de arte.',
        price: 160.00,
        stock: 150,
        date: new Date('2023-12-18T20:30:00Z'),
        images: [
            'https://www.rallimuseums.com/webfiles/images/cache/838X520/zcX1/webfiles/Gallery/2216/2436/7796_TORAL_LA-CREACION-DEL-MUNDO-SEGUN-MITO-MAPUCHE.jpg',
            'https://malba.s3.sa-east-1.amazonaws.com/wp-content/uploads/2014/03/coleccion-permanente-08.jpg',
            'https://laguiacultural.com/wp-content/uploads/elementor/thumbs/Marthalicia-Matarrita-pdqa5s4nu4k7ch6irkijd3g6vyxmq1dnpe6e5uv7f0.jpg'
        ],
        active: true,
        categories: ['Artes Escénicas'], 
        placeData: {
          country: 'México',
          city: 'Ciudad de México',
          direction: 'Museo de Arte Moderno',
          postalCode: '55791',
          dateAndTime: {
            date: new Date('2023-12-18T20:30:00Z'),
            time: '10:35 AM',
          },
        },
      },
      {
        title: 'Aventuras en la Selva: Teatro de Títeres',
        summary: 'Embárcate en un emocionante viaje a la selva con nuestros títeres. Únete a ellos mientras exploran la jungla y descubren sus misterios.',
        price: 130.00,
        stock: 180,
        date: new Date('2023-11-18T20:30:00Z'),
        images: [
            'https://bogota.gov.co/sites/default/files/styles/1050px/public/eventos/2023-03/gabo-en-bogota-2023-03-30t165414.511.jpg',
            'https://bellasartes.edu.co/festivalruquitavelasco/wp-content/uploads/2020/09/amayacu03.jpg',
            'https://www.leoncultural.com/wp-content/uploads/2017/01/El-libro-de-la-selva.jpg'
        ],
        active: true,
        categories: ['Ferias Locales'], 
        placeData: {
          country: 'Colombia',
          city: 'Medellín',
          direction: 'Parque Explora Medellín',
          postalCode: '54001',
          dateAndTime: {
            date: new Date('2023-11-18T20:30:00Z'),
            time: '6:30 AM',
          },
        },
      },
      {
        title: 'Taller de Cocina: Aprende a Hacer Sushi',
        summary: ' Sumérgete en la cultura culinaria japonesa y aprende a preparar sushi de la mano de un chef experto. Una experiencia deliciosa y educativa.',
        price: 240.00,
        stock: 500,
        date: new Date('2023-10-18T20:30:00Z'),
        images: [
            'https://www.uexternado.edu.co/wp-content/uploads/2021/10/sushi.jpg',
            'https://www.cocinaconversa.com/images/talleres/30/foto-30-1-gr.jpg',
            'https://www.guatemala.com/fotos/2019/04/Taller-de-cocina-para-aprender-a-preparar-sushi-885x500.jpg'
        ],
        active: true,
        categories: ['Festivales'], 
        placeData: {
          country: 'Colombia',
          city: 'Medellín',
          direction: 'Escuela de Cocina Sabores del Mundo',
          postalCode: '54221',
          dateAndTime: {
            date: new Date('2023-10-18T20:30:00Z'),
            time: '6:30 AM',
          },
        },
      },
      {
        title: 'Carrera de Autos Clásicos',
        summary: 'Vive la emoción de una carrera de autos clásicos. Observa autos vintage compitiendo en un circuito emocionante',
        price: 500.00,
        stock: 700,
        date: new Date('2023-12-18T20:30:00Z'),
        images: [
            'https://www.elindependiente.com/wp-content/uploads/2018/12/1.-Ferrari-330-P4-66188-980x550.jpg',
            'https://www.grandprix247.com/wp-content/uploads/2021/11/R33_9753.jpg',
            'https://www.carsceneinternational.com/wp-content/uploads/2021/09/VI.jpg'
        ],
        active: true,
        categories: ['Ferias Locales'], 
        placeData: {
          country: 'Colombia',
          city: 'Cali',
          direction: 'Circuito Automovilístico Cali',
          postalCode: '54987',
          dateAndTime: {
            date: new Date('2023-12-18T20:30:00Z'),
            time: '11:45 AM',
          },
        },
      },
      {
        title: 'Cazadores de Tesoros',
        summary: 'En este emocionante programa, equipos compiten para resolver enigmas y encontrar tesoros escondidos en locaciones exóticas de todo el mundo.',
        price: 150.00,
        stock: 700,
        date: new Date('2024-02-18T20:30:00Z'),
        images: [
            'https://www.lugaresconhistoria.com/wp-content/uploads/2015/04/tesoro_de_la_aliseda.jpg',
            'https://s1.ppllstatics.com/hoy/www/multimedia/202112/23/media/gal-motopapel/15.jpg',
            'https://s1.ppllstatics.com/hoy/www/multimedia/202112/23/media/gal-motopapel/17.jpg'
        ],
        active: true,
        categories: ['Cine y Entretenimiento'], 
        placeData: {
          country: 'Colombia',
          city: 'Bogotá',
          direction: ' Estudio de Televisión',
          postalCode: '54381',
          dateAndTime: {
            date: new Date('2024-02-18T20:30:00Z'),
            time: '6:00 AM',
          },
        },
      },
      {
        title: 'Mentes Brillantes',
        summary: 'Concursantes superinteligentes compiten en desafíos de conocimientos generales, matemáticas y lógica para demostrar quién es el más brillante.',
        price: 90.00,
        stock: 400,
        date: new Date('2023-11-18T20:30:00Z'),
        images: [
            'https://pbs.twimg.com/media/EREHJDJWAAAh16n.jpg',
            'https://img.europapress.es/fotoweb/fotonoticia_20141024114250_1200.jpg',
            'https://i.ytimg.com/vi/HWJXVzRL-80/maxresdefault.jpg'
        ],
        active: true,
        categories: ['Cine y Entretenimiento'], 
        placeData: {
          country: 'Colombia',
          city: 'Bogotá',
          direction: 'Estudio de Televisión',
          postalCode: '54763',
          dateAndTime: {
            date: new Date('2023-11-18T20:30:00Z'),
            time: '8:30 AM',
          },
        },
      },
      {
        title: 'El Desafío Extremo',
        summary: 'Participantes intrépidos enfrentan desafíos extremos en la naturaleza, desde escalada hasta supervivencia en la selva, en busca del título de campeón extremo',
        price: 650.00,
        stock: 100,
        date: new Date('2023-10-18T20:30:00Z'),
        images: [
            'https://cdn.getyourguide.com/img/tour/b0574a15d1f7f6a1.jpeg/146.jpg',
            'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0d/97/e9/b3.jpg',
            'https://leadingperutravel.com/wp-content/uploads/quebrada_yanallpa1_size.jpg'
        ],
        active: true,
        categories: ['Cine y Entretenimiento'], 
        placeData: {
          country: 'Argentina',
          city: 'Posadas',
          direction: 'Locaciones Naturales',
          postalCode: '54307',
          dateAndTime: {
            date: new Date('2023-10-18T20:30:00Z'),
            time: '5:45 AM',
          },
        },
      },
      {
        title: 'Juegos Olímpicos de Verano 2024',
        summary: 'La edición de verano de los Juegos Olímpicos presenta una amplia gama de deportes, desde atletismo y natación hasta gimnasia y ciclismo.',
        price: 115.00,
        stock: 200,
        date: new Date('2024-05-18T20:30:00Z'),
        images: [
            'https://storage.googleapis.com/static.elsoldemexico.com.mx/elesto/nota-masdeportes-paralimpicos.jpg',
            'https://www.teinteresa.es/wp-content/uploads/2014/03/2014-03-07-Juegos-Paralimpicos-Sochi_TINIMA20140307_0436_1.jpg',
            'https://spanish.korea.net/upload/content/editImage/Nordic_Skiing_First_Bronze_medal_02.jpg'
        ],
        active: true,
        categories: ['Cine y Entretenimiento'], 
        placeData: {
          country: 'Ecuador',
          city: 'Ibarra',
          direction: 'Parque Principal',
          postalCode: '54284',
          dateAndTime: {
            date: new Date('2024-05-18T20:30:00Z'),
            time: '7:00 AM',
          },
        },
      },
      {
        title: 'Emprendedores en Acción',
        summary: 'Aspirantes a empresarios presentan sus ideas de negocio a un panel de inversores expertos en busca de financiamiento para sus startups.',
        price: 100.00,
        stock: 900,
        date: new Date('2024-06-18T20:30:00Z'),
        images: [
            'https://metconecta.com/wp-content/uploads/2022/06/foto-pei-www-500x300.jpg',
            'https://d3t4nwcgmfrp9x.cloudfront.net/upload/principales-errores-cometen-empresas-emergentes.jpg',
            'https://assets.entrepreneur.com/content/3x2/2000/1671204220-GettyImages-1348969735.jpg'
        ],
        active: true,
        categories: ['Negocios y Emprendimiento'], 
        placeData: {
          country: 'Argentina',
          city: 'Posadas',
          direction: 'Estudio de Televisión',
          postalCode: '15710',
          dateAndTime: {
            date: new Date('2024-06-18T20:30:00Z'),
            time: '9:30 AM',
          },
        },
      },
      {
        title: 'Noche de la Moda Vanguardista',
        summary: 'Una experiencia única que presenta las últimas tendencias en moda de diseñadores emergentes. Ven y sé testigo de la creatividad y la innovación en la pasarela mientras los nuevos talentos de la moda comparten sus creaciones vanguardistas.',
        price: 75.00,
        stock: 500,
        date: new Date('2024-01-18T20:30:00Z'),
        images: [
            'https://1.bp.blogspot.com/-SWAAhclUSOE/YC-0sjN9TbI/AAAAAAAAG6k/f9svyVj6PicUCNAB9g793-ndOp9QD1DLgCLcBGAsYHQ/s1280/vanguardista.jpg',
            'https://i.blogs.es/7c36c3/elie-saab-53-/450_1000.jpg',
            'https://i.pinimg.com/236x/06/37/15/06371561b91e7a9997b0e3d73ad180cd.jpg'
        ],
        active: true,
        categories: ['Moda'], 
        placeData: {
          country: 'Colombia',
          city: 'Medellin',
          direction: 'Centro de Convenciones Medellin',
          postalCode: '10720',
          dateAndTime: {
            date: new Date('2024-01-18T20:30:00Z'),
            time: '2:40 PM',
          },
        },
      },
      {
        title: 'Taller de Estilismo y Tendencias',
        summary: 'Aprende los secretos detrás del estilo y las tendencias de la moda de la mano de expertos en el campo. Este taller te ayudará a definir tu propio estilo y a mantenerte actualizado con las últimas tendencias de moda',
        price: 80.00,
        stock: 100,
        date: new Date('2024-02-18T20:30:00Z'),
        images: [
            'https://thumbs.dreamstime.com/z/taller-de-t%C3%A9cnicas-peluquer%C3%ADa-rostov-don-rusia-febrero-en-el-stand-la-empresa-cadiveu-exposici%C3%B3n-industria-belleza-y-moda-161454622.jpg',
            'https://aws.condenastcollege.es/prod/designs/v1/assets/5760x3840/273.jpg',
            'https://preciosa.top/imagenes/los-5-mejores-ciclos-formativos-de-grado-medio-de-estetica-y-belleza.jpg'
        ],
        active: true,
        categories: ['Educación'], 
        placeData: {
          country: 'Argentina',
          city: 'Posadas',
          direction: 'Escuela de Diseño de Moda',
          postalCode: '45710',
          dateAndTime: {
            date: new Date('2024-02-18T20:30:00Z'),
            time: '10:00 AM',
          },
        },
      },
      {
        title: 'Conferencia de Innovación Educativa',
        summary: 'Explora las últimas tendencias en innovación educativa en esta conferencia. Escucha a expertos en el campo discutir nuevas metodologías, tecnologías y enfoques para la enseñanza y el aprendizaje del siglo XXI.',
        price: 700.00,
        stock: 100,
        date: new Date('2023-11-18T20:30:00Z'),
        images: [
            'https://www.infobae.com/new-resizer/T-6qNQreo261YoSGNU_OuUC8dek=/1440x1440/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/M6WEGNL735EBREKV6ECK2HACCM.jpg',
            'https://www.uc.cl/site/assets/files/18310/escenario_panellatriada_ciie2023222.700x532.jpg',
            'https://innovacioneducativa.upc.edu.pe/wp-content/uploads/2023/01/20230116_115704-1024x572.jpg'
        ],
        active: true,
        categories: ['Educación'], 
        placeData: {
          country: 'Colombia',
          city: 'Bogota',
          direction: 'Centro de Convenciones Educativas',
          postalCode: '17310',
          dateAndTime: {
            date: new Date('2023-11-18T20:30:00Z'),
            time: '8:30 AM',
          },
        },
      },
      {
        title: 'Curso de Desarrollo de Habilidades Digitales',
        summary: 'Aprende habilidades digitales esenciales en este curso intensivo. Desde programación hasta diseño gráfico, este curso te ayudará a adquirir las habilidades necesarias para el mercado laboral actual.',
        price: 700.00,
        stock: 100,
        date: new Date('2024-06-18T20:30:00Z'),
        images: [
            'https://www.comunicandonoticias.com/wp-content/uploads/2021/04/IMG-20210429-WA0081.jpg',
            'https://impulso06.com/wp-content/uploads/2022/09/competencias-digitales.jpg',
            'https://www.obsbusiness.school/sites/obsbusiness.school/files/images/blog_obs_tendencias_e_innovacion_competenciasdigitales_g.purita.jpg'
        ],
        active: true,
        categories: ['Ciencia y Tecología'], 
        placeData: {
          country: 'Colombia',
          city: 'Barranquilla',
          direction: 'Centro de Capacitación Tecnológica',
          postalCode: '30750',
          dateAndTime: {
            date: new Date('2024-06-18T20:30:00Z'),
            time: '7:30 AM',
          },
        },
      },
      {
        title: 'Feria de Energías Renovables',
        summary: 'Explora las últimas tecnologías y tendencias en energías renovables en esta feria. Descubre cómo la energía solar, eólica y otras fuentes sostenibles están transformando el futuro energético',
        price: 100.00,
        stock: 100,
        date: new Date('2023-10-18T20:30:00Z'),
        images: [
            'https://www.excelenciascuba.com/sites/default/files/sites/default/files/cuba/imagenes_noticias/nota-62fileminimizer.jpg',
            'https://pansogal.com//wp-content/uploads/2020/03/1.jpg',
            'https://sunandplug.com/wp-content/uploads/2021/11/hero-genera-letras.jpg'
        ],
        active: true,
        categories: ['Ecología y Sostenibilidad'], 
        placeData: {
          country: 'Republica Dominicana',
          city: 'Santo Domingo',
          direction: 'Centro de Capacitación Tecnológica',
          postalCode: '16610',
          dateAndTime: {
            date: new Date('2023-10-18T20:30:00Z'),
            time: '7:30 AM',
          },
        },
      },
      {
        title: 'Taller de Agricultura Orgánica',
        summary: 'Aprende las prácticas de la agricultura orgánica y cómo puedes cultivar alimentos de manera sostenible y respetuosa con el medio ambiente. Este taller es ideal para entusiastas de la jardinería y agricultores principiantes.',
        price: 160.00,
        stock: 300,
        date: new Date('2024-08-18T20:30:00Z'),
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/d/d0/Taller_Agricultura_Organica_Jard%C3%ADn_Bot%C3%A1nico_CICEANA.jpg',
            'https://www.sitopia.mx/wp-content/uploads/2020/06/taller-huerto-urbano.jpg',
            'https://ladiversiva.com/wp-content/uploads/2019/12/taller_agricultura_termica.jpg'
        ],
        active: true,
        categories: ['Ecología y Sostenibilidad'], 
        placeData: {
          country: 'Argentina',
          city: 'Posadas',
          direction: 'Granja Orgánica Verde',
          postalCode: '15910',
          dateAndTime: {
            date: new Date('2024-08-18T20:30:00Z'),
            time: '9:30 AM',
          },
        },
      },
      {
        title: 'Debate de Candidatos Locales',
        summary: 'Participa en un debate en vivo con los candidatos locales para las próximas elecciones municipales. Esta es tu oportunidad para conocer sus propuestas y hacer preguntas directas sobre los temas que más te importan.',
        price: 190.00,
        stock: 100,
        date: new Date('2024-04-18T20:30:00Z'),
        images: [
            'https://www.semana.com/resizer/YIAtbytwdT-hKx2FCCzIHoYtxhs=/480x0/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/G6HSUUCZFJBXZEPZ4KUSXDTPLI.jpg',
            'https://www.eluniversal.com.co/binrepository/1200x800/0c0/0d0/none/13704/RHSW/debate-de-candidatos-a-la-alcaldia-de-cartagena-2023_8573642_20230926194408.jpg',
            'https://media.diariolasamericas.com/p/8d9224c3ab69d6aca0191f51f22d5f88/adjuntos/216/imagenes/100/076/0100076381/855x0/smart/debate-republicano-afp.jpg'
        ],
        active: true,
        categories: ['Debate y Politica'], 
        placeData: {
          country: 'Colombia',
          city: 'Bogota',
          direction: 'Centro Cívico Municipal',
          postalCode: '22710',
          dateAndTime: {
            date: new Date('2024-04-18T20:30:00Z'),
            time: '9:30 PM',
          },
        },
      },
      {
        title: 'Conferencia sobre Política y Cambio Social',
        summary: 'Únete a esta conferencia donde destacados expertos en política discutirán el papel de la política en el cambio social. Analizaremos los desafíos actuales y las oportunidades para crear un mundo más justo y equitativo.',
        price: 100.00,
        stock: 900,
        date: new Date('2023-12-18T20:30:00Z'),
        images: [
            'https://elearning.unisabana.edu.co/fileadmin/media/Titulaciones/Diplomado_en_Politica_Publica_y_Liderazgo_Regional/diplomado-politica-publica-unisabana-e-learning-universidad-de-la-sabana.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/6/64/Conferencia_Valor_y_Vigencia_de_Pol%C3%ADticas_de_Estado_%2Cpara_enfrentar_el_cambio_Clim%C3%A1tico_promoviendo_Desarrollo_Sostenible_y_Regenerativo_con_participaci%C3%B3n_Ciudadana._%2824920953730%29.jpg',
            'https://www.gaceta.unam.mx/wp-content/uploads/2022/11/221124-Dep1-des-f1-Congreso-Deportivo.jpg'
        ],
        active: true,
        categories: ['Debate y Politica'], 
        placeData: {
          country: 'Argentina',
          city: 'Posadas',
          direction: 'Centro de Convenciones Políticas',
          postalCode: '15200',
          dateAndTime: {
            date: new Date('2023-11-18T20:30:00Z'),
            time: '8:00 PM',
          },
        },
      },
      {
        title: 'Cumbre de Educación Online',
        summary: 'Únete a expertos en educación en línea de todo el mundo en esta cumbre virtual. Explora las mejores prácticas, estrategias de enseñanza en línea y tecnologías emergentes para la educación a distancia',
        price: 600.00,
        stock: 100,
        date: new Date('2023-10-18T20:30:00Z'),
        images: [
            'https://www.abiztar.com.mx/articulos/imagenes/u-learning.jpg',
            'https://www.semana.com/resizer/TUMt-ZBFxSi2_9Z_3Tu4xLAvZsk=/arc-anglerfish-arc2-prod-semana/public/BMDVXFTY2JAETHBQPSMN2VKFGQ.jpg',
            'https://cloudfront-us-east-1.images.arcpublishing.com/semana/DVQFL36IHFC7BKQAH5E2VIUIFA.jpg'
        ],
        active: true,
        categories: ['Educación'], 
        placeData: {
          country: 'Mexico',
          city: 'Guadalajara',
          direction: 'Evento en línea',
          postalCode: '19830',
          dateAndTime: {
            date: new Date('2023-10-18T20:30:00Z'),
            time: '7:30 AM',
          },
        },
      },
      {
        title: 'Conferencia de Inteligencia Artificial',
        summary: 'Explora el emocionante mundo de la inteligencia artificial en esta conferencia. Expertos en IA compartirán sus conocimientos sobre aprendizaje automático, redes neuronales y aplicaciones prácticas en diversas industrias.',
        price: 75.00,
        stock: 900,
        date: new Date('2024-02-18T20:30:00Z'),
        images: [
            'https://icontinental.edu.pe/wp-content/uploads/2023/06/lanzamiento-programa.jpg',
            'https://clickeducacion.com/wp-content/uploads/2020/12/Desventajas-de-la-inteligencia-artificial-en-la-educaci%C3%B3n-1280x720.jpg',
            'https://gestion.pe/resizer/QoHhBSCYELniNCUdf4V2atQ6axg=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/CJ7R562Y45GNXFJAWGOUS3NRYI.jpg'
        ],
        active: true,
        categories: ['Ciencia y Tecnología'], 
        placeData: {
          country: 'Argentina',
          city: 'Posadas',
          direction: 'Centro de Convenciones Tecnológicas',
          postalCode: '13730',
          dateAndTime: {
            date: new Date('2024-02-18T20:30:00Z'),
            time: '5:30 PM',
          },
        },
      },
      {
        title: 'Taller de Robótica Avanzada',
        summary: 'Sumérgete en el mundo de la robótica en este taller práctico. Aprende a programar robots avanzados y explora la automatización y la inteligencia artificial en la robótica moderna.',
        price: 90.00,
        stock: 100,
        date: new Date('2023-11-18T20:30:00Z'),
        images: [
            'https://camptecnologico.com/wp-content/uploads/2014/02/ev3-1.jpg',
            'https://www.tekniker.es/media/uploads/soluciones/ST_AutomatizacionRobotica_808x450px_icono.jpg',
            'https://c8.alamy.com/compes/2ab8k9f/uso-de-la-robotica-flexible-en-procesos-de-fabricacion-industrial-robot-movil-unidad-de-fabricacion-avanzada-centro-tecnologico-tecnalia-research-2ab8k9f.jpg'
        ],
        active: true,
        categories: ['Ciencia y Tecnología'], 
        placeData: {
          country: 'Argentina',
          city: 'Posadas',
          direction: 'Centro de Investigación Tecnológica',
          postalCode: '15338',
          dateAndTime: {
            date: new Date('2023-11-18T20:30:00Z'),
            time: '9:30 AM',
          },
        },
      },
      {
        title: 'Hackatón de Innovación Tecnológica',
        summary: 'Participa en un emocionante hackatón de 48 horas donde equipos compiten para desarrollar soluciones tecnológicas innovadoras. Desafíate a ti mismo y colabora con otros apasionados por la tecnología.',
        price: 50.00,
        stock: 900,
        date: new Date('2023-11-18T20:30:00Z'),
        images: [
           'https://www.expotextilperu.com/wp-content/uploads/shutterstock_2257190487-1-768x512.jpg',
           'https://news.microsoft.com/wp-content/uploads/prod/sites/41/2022/05/Hackathon.jpg',
           'https://cdn-3.expansion.mx/dims4/default/11c632d/2147483647/strip/true/crop/1342x782+0+0/resize/1800x1049!/format/webp/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F06%2F32%2F4bf2ec0446fd8ec20df8821575d9%2Fciencia-tecnologia-salud.jpg' 
        ],
        active: true,
        categories: ['Ciencia y Tecnología'], 
        placeData: {
          country: 'Argentina',
          city: 'Posadas',
          direction: ' Centro de Innovación Tecnológica',
          postalCode: '13390',
          dateAndTime: {
            date: new Date('2023-11-18T20:30:00Z'),
            time: '10:30 AM',
          },
        },
      },
      {
        title: 'Conferencia de Exploración Espacial',
        summary: 'Embárcate en un viaje a las estrellas en esta conferencia sobre exploración espacial. Astronautas y científicos espaciales compartirán sus experiencias y descubrimientos en la exploración del cosmos',
        price: 45.00,
        stock: 600,
        date: new Date('2023-12-18T20:30:00Z'),
        images: [
            'https://www.etsi.us.es/sites/default/files/agenda/2022-11/Conferencia-Futuro-de-la-nasa-00-ETSi.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/9/98/EdWhiteFirstAmericanSpacewalker.1965.ws.jpg',
            'https://www.thelivingmoon.com/49ufo_files/04images/General/claudie_haignere.jpg'
        ],
        active: true,
        categories: ['Ciencia y Tecnología'], 
        placeData: {
          country: 'Argentina',
          city: 'Posadas',
          direction: ' Centro Espacial Johnson',
          postalCode: '15727',
          dateAndTime: {
            date: new Date('2023-12-18T20:30:00Z'),
            time: '6:30 AM',
          },
        },
      },
      {
        title: 'Desfile de Moda Primavera/Verano',
        summary: 'Únete a nosotros para presenciar el glamour y la elegancia de la moda primavera/verano en un desfile exclusivo. Diseñadores de renombre presentarán sus últimas creaciones en una pasarela de lujo.',
        price: 85.00,
        stock: 900,
        date: new Date('2023-12-18T20:30:00Z'),
        images: [
            'https://www.dior.com/couture/var/dior/storage/images/folder-media/folder-videos/folder-defiles/folder-defile-haute-couture-printemps-ete-2023/dior_women_hc_ss23show_finalvideo/39434251-1-fre-FR/dior_women_hc_ss23show_finalvideo.jpg',
            'https://es.rollingstone.com/wp-content/uploads/2022/10/La-temporada-primavera-verano-2023-en-momentos-9.jpg',
            'https://phantom-telva.unidadeditorial.es/4f674059ebabfc2fffbe14a82117035e/resize/828/f/jpg/assets/multimedia/imagenes/2022/01/24/16430411284922.jpg'
        ],
        active: true,
        categories: ['Moda'], 
        placeData: {
          country: 'Argentina',
          city: 'Posadas',
          direction: 'Espacio de Eventos Elegante',
          postalCode: '12857',
          dateAndTime: {
            date: new Date('2023-12-18T20:30:00Z'),
            time: '6:30 PM',
          },
        },
      },
      {
        title: 'Taller de Maquillaje de Celebridades',
        summary: 'Aprende los secretos del maquillaje de celebridades en este taller exclusivo. Maquilladores profesionales te enseñarán las técnicas utilizadas en las alfombras rojas y las portadas de revistas.',
        price: 95.00,
        stock: 800,
        date: new Date('2023-11-18T20:30:00Z'),
        images: [
            'https://makia.la/wp-content/uploads/2018/03/maquillaje-contour-paso-a-paso-1-850x622.jpg',
            'https://1.bp.blogspot.com/-k6qQ-vtW-bU/U4Ase2wznPI/AAAAAAAATcE/Jvy-abW_WSg/s1600/secretos-del-maquillaje-profesional.jpg',
            'https://hips.hearstapps.com/hmg-prod/images/celebrities-marcas-belleza-1645541606.jpg'
        ],
        active: true,
        categories: ['Moda'], 
        placeData: {
          country: 'Argentina',
          city: 'Posadas',
          direction: 'Estudio de Maquillaje de Lujo',
          postalCode: '15347',
          dateAndTime: {
            date: new Date('2023-11-18T20:30:00Z'),
            time: '7:30 PM',
          },
        },
      },
      {
        title: 'Venta de Ropa Vintage',
        summary: 'Explora una amplia selección de ropa vintage de alta calidad en esta venta especial. Encuentra piezas únicas y con estilo que harán que tu guardarropa sea verdaderamente especial.',
        price: 75.00,
        stock: 600,
        date: new Date('2023-12-18T20:30:00Z'),
        images: [
            'https://media.revistavanityfair.es/photos/60e84dea24e5f096406bf4f1/master/w_1600%2Cc_limit/27637.jpg',
            'https://www.dondeir.com/wp-content/uploads/2017/09/4-tiendas-de-ropa-vintage-en-ciudad-de-mexico-moda-vieja.jpg',
            'https://www.dondeir.com/wp-content/uploads/2021/04/bazares-segunda-mano.jpg'
        ],
        active: true,
        categories: ['Moda'], 
        placeData: {
          country: 'Colombia',
          city: 'Medellin',
          direction: 'Mercado Vintage Exclusivo',
          postalCode: '15329',
          dateAndTime: {
            date: new Date('2023-12-18T20:30:00Z'),
            time: '6:30 AM',
          },
        },
      },
      {
        title: 'Conferencia Internacional de Innovación Empresarial.',
        summary: ' Únete a la Conferencia Internacional de Innovación Empresarial y descubre cómo las empresas líderes están transformando sus operaciones en la era digital. Este evento reunirá a expertos en innovación y emprendimiento para compartir sus ideas y estrategias sobre cómo impulsar el crecimiento y la sostenibilidad de los negocios en un mundo en constante cambio.',
        price: 85.00,
        stock: 100,
        date: new Date('2023-10-18T20:30:00Z'),
        images: [
           'https://andicom.co/wp-content/uploads/2023/07/ANDICOM_conferencias-2-1.jpg',
           'https://lanotaeconomica.com.co/wp-content/uploads/elementor/thumbs/ANDICOM-q6kg1llv6j27tm27nf95r0m63axg445o49a8kudwfw.jpg',
           'https://andicom.co/wp-content/uploads/2023/09/DSC_0164-1-scaled.jpg' 
        ],
        active: true,
        categories: ['Negocios y Emprendimiento'], 
        placeData: {
          country: 'Argentina',
          city: 'La Plata',
          direction: 'Innovación Empresarial, Transformación Digital',
          postalCode: '14498',
          dateAndTime: {
            date: new Date('2023-10-18T20:30:00Z'),
            time: '10:30 AM',
          },
        },
      },
      {
        title: 'Foro de Emprendedores Creativos',
        summary: 'Únete al Foro de Emprendedores Creativos, donde la creatividad y los negocios se fusionan. En este evento único, exploraremos cómo la creatividad puede impulsar la innovación empresarial y la expresión artística. Escucha a emprendedores creativos de renombre, participa en talleres prácticos y conéctate con personas apasionadas por la creatividad y los negocios.',
        price: 75.00,
        stock: 600,
        date: new Date('2023-11-18T20:30:00Z'),
        images: [
            'https://www.nicaraguacreativa.com/wp-content/uploads/2020/07/creatividad.jpg',
            'https://www.eleconomista.com.mx/__export/1660746966335/sites/eleconomista/img/2022/08/17/marketing_digital_0.jpg_1014274486.jpg',
            'https://elcomercio.pe/resizer/dggR93z0vbdhDfty3HCCqoQkFb0=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/7OMJK5BZHRE6NFMZITNHFLCB4I.jpg'
        ],
        active: true,
        categories: ['Negocios y Emprendimiento'], 
        placeData: {
          country: 'Argentina',
          city: 'Salta',
          direction: ' Galería de Arte Imagina',
          postalCode: '15136',
          dateAndTime: {
            date: new Date('2023-11-18T20:30:00Z'),
            time: '9:45 AM',
          },
        },
      },
      {
        title: 'Noche de Comedia en Vivo',
        summary: 'Únete a nosotros para una noche llena de risas y diversión en nuestra Noche de Comedia en Vivo. Disfruta de un elenco de comediantes profesionales que te harán reír a carcajadas con sus rutinas humorísticas. Este evento es perfecto para relajarse y disfrutar de un buen momento con amigos o en pareja.',
        price: 65.00,
        stock: 300,
        date: new Date('2023-12-18T20:30:00Z'),
        images: [
            'https://c8.alamy.com/compes/2ayt74d/microfono-de-comedia-en-escenario-de-espectaculo-de-musica-de-comedia-en-club-con-luces-y-colores-2ayt74d.jpg',
            'https://media-cdn.tripadvisor.com/media/photo-s/16/8e/bf/97/noches-de-musica-en-vivo.jpg',
            'https://media-cdn.tripadvisor.com/media/photo-s/16/8e/bf/1d/noches-de-musica-en-vivo.jpg'
        ],
        active: true,
        categories: ['Comedia'], 
        placeData: {
          country: 'Argentina',
          city: 'Ciudad de Córdoba',
          direction: 'Teatro de la Risa',
          postalCode: '18727',
          dateAndTime: {
            date: new Date('2023-12-18T20:30:00Z'),
            time: '6:30 PM',
          },
        },
      },
      {
        title: ' Conferencia Internacional de Ecología y Sostenibilidad Actual',
        summary: 'Únete a la Conferencia Internacional de Ecología y Sostenibilidad para explorar soluciones innovadoras y prácticas para los desafíos ambientales actuales. Esta conferencia reúne a expertos en ecología, sostenibilidad y conservación para compartir conocimientos y promover la acción hacia un futuro más sostenible y ecológico.',
        price: 85.00,
        stock: 700,
        date: new Date('2023-10-18T20:30:00Z'),
        images: [
            'https://e-management.mx/website/wp-content/uploads/2017/11/Qu%C3%A9-se-necesita-para-alcanzar-el-desarrollo-sostenible.jpg',
            'https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/newyork_2005_600x400.jpg',
            'https://www.diariodesevilla.es/2023/02/03/sevilla/aumentar-desarrollo-sostenible-empresas_1762933880_176068558_667x375.jpg'
        ],
        active: true,
        categories: ['Ecología y Sostenibilidad'], 
        placeData: {
          country: 'Argentina',
          city: 'Posadas',
          direction: '  Ciudad Verde',
          postalCode: '12046',
          dateAndTime: {
            date: new Date('2023-10-18T20:30:00Z'),
            time: '11:00 AM',
          },
        },
      },



  ];
  
  module.exports = eventsData;
  