const mongoose = require('mongoose');
require("dotenv").config(); 
const Category = require('../src/models/Category'); 

const MONGO_URI = process.env.MONGO_URI; 

console.log(MONGO_URI);

const categoriesData = [
    {
      name: 'Salud y Bienestar',
      description: 'Eventos relacionados con la salud física y mental, como yoga y meditación.',
      backgroundImage: [
        'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695950620/Events/Salud%20y%20bienestar/william-farlow-IevaZPwq0mw-unsplash_geu38e.jpg', 
        'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695950619/Events/Salud%20y%20bienestar/emma-simpson-mNGaaLeWEp0-unsplash_dpbpif.jpg',
        'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695950711/Events/Salud%20y%20bienestar/martin-magnemyr-nGt71kRwUOw-unsplash_oduo5s.jpg'
      ]
    },
    {
      name: 'Educación',
      description: 'Charlas y talleres educativos sobre una variedad de temas académicos.',
      backgroundImage: [
        'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695849313/Events/Educaci%C3%B3n/mr-cup-fabien-barral-Fo5dTm6ID1Y-unsplash_nwwnzs.jpg', 
        'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695849320/Events/Educaci%C3%B3n/andrew-neel-1-29wyvvLJA-unsplash_gi5tpb.jpg',
        'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695849319/Events/Educaci%C3%B3n/phil-goodwin-gWrxqChFf1Y-unsplash_gy6wcc.jpg'
      ]
    },
    {
      name: 'Negocios y Emprendimiento',
      description: 'Eventos para emprendedores y profesionales de los negocios.',
      backgroundImage: [
        'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695951046/Events/Negocios%20y%20emprendimiento/the-climate-reality-project-Hb6uWq0i4MI-unsplash_arynfi.jpg', 
        'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695951042/Events/Negocios%20y%20emprendimiento/pexels-ketut-subiyanto-4349944_zn6xgu.jpg',
        'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695951043/Events/Negocios%20y%20emprendimiento/pexels-liza-summer-6347920_tnhdjq.jpg'
      ]
    },
    {
      name: 'Ecología y Sostenibilidad',
      description: 'Eventos enfocados en la protección del medio ambiente y la sostenibilidad.',
      backgroundImage: [
        'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695951644/Events/Ecolog%C3%ADa%20y%20sostenibilidad/jael-rodriguez-XCSI3baypM4-unsplash_jkc8mz.jpg', 
        'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695951641/Events/Ecolog%C3%ADa%20y%20sostenibilidad/pexels-pixabay-159397_jnnxal.jpg',
        'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695951646/Events/Ecolog%C3%ADa%20y%20sostenibilidad/hillary-ungson-TdpSX7XAcKo-unsplash_ibjl0m.jpg'
      ]
    },
    {
        name: 'Ciencia y Tecnología',
        description: 'Conferencias y eventos sobre exploración espacial y ciencia espacial.',
        backgroundImage: [
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695951794/Events/Ciencia%20y%20tecnolog%C3%ADa/jesse-orrico-rmWtVQN5RzU-unsplash_hz8xor.jpg', 
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695951791/Events/Ciencia%20y%20tecnolog%C3%ADa/chuttersnap-UmncJq4KPcA-unsplash_orhby7.jpg',
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695951800/Events/Ciencia%20y%20tecnolog%C3%ADa/alex-kotliarskyi-ourQHRTE2IM-unsplash_ck6ngx.jpg'
        ]
      },
      {
        name: 'Artes Escénicas',
        description: 'Eventos de teatro, danza, ópera y otros espectáculos en vivo.',
        backgroundImage: [
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695773206/Events/Artes%20esc%C3%A9nicas/pwzttaeva480cwjtlrwz.jpg', 
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695773204/Events/Artes%20esc%C3%A9nicas/vd50mkw6akfsgjeuv8ba.jpg',
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695773203/Events/Artes%20esc%C3%A9nicas/lxty7v1blpoe9u9kxtb6.jpg'
        ]
      },
      {
        name: 'Debates y Política',
        description: 'Debates políticos y eventos relacionados con la actualidad política.',
        backgroundImage: [
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695952253/Events/Debates%20y%20pol%C3%ADtica/pexels-august-de-richelieu-4427611_bnogqc.jpg', 
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695952250/Events/Debates%20y%20pol%C3%ADtica/gente-negocios-discutiendo-disputas-o-desacuerdos-reuniones-o-negociaciones-ai-generativo_hnmbuh.jpg',
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695952247/Events/Debates%20y%20pol%C3%ADtica/pexels-werner-pfennig-6949867_acqhu1.jpg'
        ]
      },
      {
        name: 'Conciertos',
        description: 'Eventos musicales en vivo y espectáculos de artistas reconocidos.',
        backgroundImage: [
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695952646/Events/Conciertos/omar-flores-AndwyJNdk1k-unsplash_l9prlx.jpg', 
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695952588/Events/Conciertos/panagiotis-falcos-4T-jKyx1cQk-unsplash_hzcrab.jpg',
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695952587/Events/Conciertos/nonresident-RvDBwFD7XUg-unsplash_q8goyf.jpg'
        ]
      },
      {
        name: 'Comedia',
        description: 'Espectáculos de comedia en vivo y noches de risas.',
        backgroundImage: [
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695952981/Events/Comedia/michel-grolet-NBRNK4XC1k8-unsplash_d6idyj.jpg', 
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695952978/Events/Comedia/stewart-munro-KeRJDtQrRGc-unsplash_sgkbwm.jpg',
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695952983/Events/Comedia/pexels-faruk-tokluo%C4%9Flu-10063045_dbj1yi.jpg'
        ]
      },
      {
        name: 'Eventos Familiares',
        description: 'Actividades y eventos para toda la familia.',
        backgroundImage: [
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695953350/Events/Eventos%20familiares/pexels-ron-lach-8540376_axqoxs.jpg', 
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695953316/Events/Eventos%20familiares/pexels-rdne-stock-project-7551762_wmwyoo.jpg',
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695953276/Events/Eventos%20familiares/pexels-yan-krukau-8613054_wmcy5y.jpg'
        ]
      },
      {
        name: 'Eventos Deportivos',
        description: 'Competencias y eventos de deportes.',
        backgroundImage: [
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695849029/Events/Eventos%20deportivos/kaylee-garrett-GaprWyIw66o-unsplash_kjwarl.jpg', 
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695849032/Events/Eventos%20deportivos/gabriel-vasiliu-1VRgILQNtP8-unsplash_es8f5a.jpg',
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695849030/Events/Eventos%20deportivos/med-mhamdi-Ab89XuE-0Oc-unsplash_ikpykv.jpg'
        ]
      },
      {
        name: 'Exposiciones de Arte',
        description: 'Exhibiciones de arte contemporáneo y clásico.',
        backgroundImage: [
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695953739/Events/Exposiciones%20de%20arte/pexels-riccardo-69903_qzxexd.jpg', 
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695953760/Events/Exposiciones%20de%20arte/viktor-talashuk-S39X1P9gsfA-unsplash_owf90b.jpg',
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695953757/Events/Exposiciones%20de%20arte/pexels-vladyslav-dukhin-296649_bnpmdp.jpg'
        ]
      },
      {
        name: 'Ferias Locales',
        description: 'Ferias de productos locales y artesanías.',
        backgroundImage: [
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695954476/Events/Ferias%20locales/pramod-kumar-sharma-TpjvNsI_h_0-unsplash_n919ck.jpg', 
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695954490/Events/Ferias%20locales/ksenia-berzoj-KKBTw3XW7do-unsplash_uvofzn.jpg',
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695954480/Events/Ferias%20locales/ries-bosch-WwVRR9G-Z8I-unsplash_faocdt.jpg'
        ]
      },
      {
        name: 'Cine y Entretenimiento',
        description: 'Proyecciones de películas, eventos de entretenimiento y espectáculos.',
        backgroundImage: [
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695954567/Events/Cine%20y%20entretenimiento/chris-murray-iwfHhOZLVMU-unsplash_xj0lmg.jpg', 
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695954569/Events/Cine%20y%20entretenimiento/karla-rivera-OQrFoNQ_zTU-unsplash_q5jwjj.jpg',
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695954564/Events/Cine%20y%20entretenimiento/valery-tenevoy-cWpyu-hKVv0-unsplash_b6wxuf.jpg'
        ]
      },
      {
        name: 'Moda',
        description: 'Desfiles de moda y eventos relacionados con la industria textil.',
        backgroundImage: [
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695954788/Events/Moda/raden-prasetya-EvjmSg1xurI-unsplash_dg0veh.jpg', 
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695954791/Events/Moda/michael-lee-5Z9bgfRZLLE-unsplash_gxljoq.jpg',
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695954781/Events/Moda/raden-prasetya-CQDkSdPOzYY-unsplash_knlvjh.jpg'
        ]
      },
      {
        name: 'Festivales',
        description: 'Festivales de música, comida, cine y más para disfrutar en comunidad.',
        backgroundImage: [
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695954909/Events/Festivales/nandu-menon-hGHldbCgYDA-unsplash_vjvceq.jpg', 
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695954894/Events/Festivales/eric-ward-uD0W-swVGgE-unsplash_cmnf97.jpg',
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695954897/Events/Festivales/aranxa-esteve-S5DEUg2yUVU-unsplash_hv4tzb.jpg'
        ]
      },
        {
        name: 'Gastronomía',
        description: 'Eventos culinarios y degustaciones de comida.',
        backgroundImage: [
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695848680/Events/Gatronom%C3%ADa/cristi-caval-V3F18sonn7k-unsplash_gtdmk9.jpg', 
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695848679/Events/Gatronom%C3%ADa/liz-pullan-pattathy-M4lY08ucZz8-unsplash_k5yx3k.jpg',
          'https://res.cloudinary.com/dwwqyz3ux/image/upload/v1695848681/Events/Gatronom%C3%ADa/daniel-gutierrez-X8LSN3zdK8Q-unsplash_gpxxaq.jpg'
        ]
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
  
