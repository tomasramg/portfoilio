import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Tomás Ramírez González', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hola, mi nombre es',
  name: 'Tomás Ramírez González',
  subtitle: 'Soy desarrollador web Jr.',
  cta: 'Más sobre mí',
};

// ABOUT DATA
export const aboutData = {
  img: 'tomas.jpg',
  paragraphOne: 'Soy un programador que ha desarrollado habilidades en HML5, CSS, JavaScript y PHP en el bootcamp de Upgrade Hub, durante la cuarentena causada por el COVID-19.',
  paragraphTwo: 'Estoy en la búsqueda de una oportunidad de trabajo como desarrollador junior de aplicaciones web. Si estás interesado en que crezcamos juntos, no dudes en consultarme.  ',
  paragraphThree: 'Además ser un desarrollador web, me considero un profesional polivalente y resolutivo que en los últimos años se he dedicado al mundo del marketing digital, específicamente, al sector del ticketing.',
  resume: 'https://www.linkedin.com/in/tomasramirezgonzalez/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Coronatracker.jpg',
    title: 'Coronatracker',
    info: 'El Coronatracker es una aplicación web en la que puedes consultar los datos diarios de los contagios, las muertes y las curaciones de COVID-19 a nivel global. Para construir esta aplicación he usado React, en un proyecto en el que he conectado con una API que envía data actualizada del Coronavirus. También he usado librerías para los gráficos de los contagios a nivel global, y gráficos de barras, para mostrar la información detallada por cada uno de los países.',
    info2: '',
    url: 'https://friendly-noether-2d5ccb.netlify.app',
    repo: 'https://gitlab.com/tomasramg/coronatracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Lucky.jpg',
    title: 'Lucky',
    info: 'Lucky ha sido el proyecto final del Bootcamp de Full Stack Web Develpment que hemos desarrollado en un productivo equipo. Implementamos el diseño que hizo otro equipo del Bootcamp de UX/UI sobre una web de adopción de animales, la cuál tiene muchos elementos como un formulario de candidatos de adopción, un mapa con las mascotas geolocalizadas y un login de usuarios, entre otras funcionalidades.',
    info2: '',
    repo: 'https://gitlab.com/Durillo/lucky-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Maleteo.jpg',
    title: 'Maleteo',
    info: 'Para el proyecto final del módulo de PHP del bootcamp de Upgrade Hub, hemos desarrollado la landing page del proyecto Maleteo, una web con la que los usuarios pueden ofrecerse para cuidar el equipaje de los turistas. Para desarrollar la landing page hemos usado Symfony, Twig y MySQL. ',
    info2: '',
    repo: 'https://gitlab.com/tomasramg/maleteo-landing', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'tomasramirezg@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '@elmastomas1',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://gitlab.com/tomasramg',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/tomasramirezgonzalez/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/tomasramg',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
