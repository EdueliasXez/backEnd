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
        images: [
          'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCQHCknJ80PmX43ZCgspe2zn_OLkF0pRzxcXjZ1QOHIrys0nUNPsj9UOgEFWyG9dup5z9dhtNbbA0NU_8vDUtFZZd2gOmw9OzHo7REZsd8s9x5eHXXW_tjKCe_sL9YweyX7ByXtLk05nwqf0rghXpQt_IFpIksCDXdJY8O1nKoMkpCm1uKCyCjIBtT4A/s1920/slide-evento-voyayer-2023-001.jpg',
          'https://www.elvigia.net/u/fotografias/m/2019/2/6/f1280x720-398461_530136_5050.jpg',
          'https://media.es.wired.com/photos/650337a9a678a8681335ad55/16:9/w_2560%2Cc_limit/telescopio%2520en%2520la%2520luna%2520futuro.jpg'
        ],
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
        images: [
          'https://dating101sydney.files.wordpress.com/2012/03/poster.jpg',
          'https://1.bp.blogspot.com/-p-UEWsPhkWM/WJ4QkU7rATI/AAAAAAAAHVA/T5I01J-mtpwZ5Fugo5PKJQZYsbnlMcVJACEw/s1600/Traviata034.jpg',
          'https://www.operaactual.com/wp-content/uploads/2020/03/traviata-operaactual-met--e1584960023979.jpg'
        ],
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
        categories: ['Música, Conciertos'], 
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
        categories: ['Teatro, Artes escénicas'], 
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
        categories: ['Cine, Cultura'], 
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
        categories: ['Música'], 
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
        categories: ['Arte'], 
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
        categories: ['Arte','Exposición'], 
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
        categories: ['Gastronomía','Vino'], 
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
        images: ['/images/event10.jpg'],
        active: true,
        categories: [
          'https://www.rocknvivo.com/wp-content/uploads/2009/08/dorso-leyendas.jpg',
          'https://elperiodicodevillena.com/wp-content/uploads/2022/08/Opeth.jpg',
          'https://www.rockculture.es/wp-content/uploads/2023/08/bullet-for-my-valentine-rc-7526-1.jpg'
        ], 
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
        categories: ['Cine', 'Festival'], 
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
        categories: ['Deportes'], 
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
        categories: ['Música'], 
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
        categories: ['Deportes, Fútbol'], 
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
        categories: ['Entretenimiento'], 
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
        categories: ['Música'], 
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
        categories: ['Teatro'], 
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
        categories: ['Arte'], 
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
        categories: [' Arte, Historia'], 
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
        categories: ['Cómics, Cultura pop'], 
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
        categories: ['Deportes'], 
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
        categories: ['Deportes'], 
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
        categories: ['Deportes'], 
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
        categories: ['Deportes'], 
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
        categories: ['Música'], 
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
        categories: ['Música'], 
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
        categories: ['Música'], 
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
        categories: ['Deportes'], 
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
        categories: ['Deportes'], 
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
        categories: ['Cultura'], 
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
        categories: ['Arte, Historia'], 
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
        categories: ['Música', 'Entretenimiento'], 
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
        categories: ['Arte', 'Cultura'], 
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
        categories: [' Aventura, Familia'], 
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
        categories: ['Gastronomía, Talleres'], 
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
        categories: ['Deportes, Motor'], 
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
        categories: ['Concursos, Aventura'], 
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
        categories: [' Concursos, Educación'], 
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
        categories: ['Concursos, Aventura'], 
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
        categories: ['Concursos, Aventura'], 
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
        categories: ['Concursos, Emprendimiento'], 
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

  ];
  
  module.exports = eventsData;
  