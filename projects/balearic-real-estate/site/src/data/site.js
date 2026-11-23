// All content for the page lives here so it stays consistent and could move to a CMS later.
// Solell is a fictional agency: homes, prices and the contact are illustrative.
import canPou from '../assets/photos/can-pou.jpg';
import casaDesPortal from '../assets/photos/casa-des-portal.jpg';
import esVarador from '../assets/photos/es-varador.jpg';
import casaDeLaCampana from '../assets/photos/casa-de-la-campana.jpg';
import esMares from '../assets/photos/es-mares.jpg';
import saClastra from '../assets/photos/sa-clastra.jpg';

export const contact = {
  name: 'Aina Ferrer',
  role: 'Partner, Solell',
  email: 'aina@solell.example',
  phone: '+34 971 00 00 00',
  phoneHref: '+34971000000',
};

export const islands = [
  {
    id: 'ibiza',
    name: 'Ibiza',
    homes: [
      {
        id: 'can-pou',
        name: 'Can Pou',
        place: 'Sant Carles',
        line: 'A farmhouse with walls a metre thick and a well that still fills in March.',
        facts: '5 bedrooms · 420 m² · 2.1 ha',
        price: 'Guide €4.9m',
        photo: canPou,
        alt: 'White farmhouse with an arched window behind a dry garden of oleander and dragon tree',
        position: '30% 50%',
      },
      {
        id: 'casa-des-portal',
        name: 'Casa des Portal',
        place: 'Dalt Vila',
        line: 'Three floors inside the old walls, with a roof terrace level with the cathedral bells.',
        facts: '3 bedrooms · 240 m² · roof terrace',
        price: 'Guide €2.8m',
        photo: casaDesPortal,
        alt: 'Whitewashed townhouses and a small belfry around a quiet square in the old town',
        position: '0% 0%',
      },
      {
        id: 'es-varador',
        name: 'Es Varador',
        place: 'Porroig',
        line: 'A low house above the boat sheds, forty steps from the water and hidden from the road.',
        facts: '4 bedrooms · 290 m² · 0.6 ha',
        price: 'Price on request',
        photo: esVarador,
        alt: 'Fishing boat drawn up on timber slipways beside old boat sheds in a sheltered bay',
        position: '70% 50%',
      },
    ],
  },
  {
    id: 'mallorca',
    name: 'Mallorca',
    homes: [
      {
        id: 'casa-de-la-campana',
        name: 'Casa de la Campana',
        place: 'Valldemossa',
        line: 'A village house the colour of the hill behind it, with a walled garden the street cannot see.',
        facts: '4 bedrooms · 310 m² · garden',
        price: 'Guide €3.2m',
        photo: casaDeLaCampana,
        alt: 'Ochre village house with green shutters and a wide arched timber door',
        position: '62% 50%',
      },
      {
        id: 'es-mares',
        name: 'Es Marès',
        place: 'Fornalutx',
        line: 'Stone house and tower under the Tramuntana, with forty terraces of olive and one of lemon.',
        facts: '6 bedrooms · 540 m² · 8 ha',
        price: 'Guide €6.4m',
        photo: esMares,
        alt: 'Stone farmhouse with green shutters and a round tower below a limestone ridge',
        position: '45% 50%',
      },
      {
        id: 'sa-clastra',
        name: 'Sa Clastra',
        place: 'Es Capdellà',
        line: 'An estate house built round a cobbled courtyard, with its own spring and a chapel the size of a bedroom.',
        facts: '7 bedrooms · 680 m² · 14 ha',
        price: 'Guide €7.5m',
        photo: saClastra,
        alt: 'Cobbled courtyard of an old estate house with a well at its centre and hills behind',
        position: '50% 50%',
      },
    ],
  },
];

export const steps = [
  {
    title: 'A conversation',
    text: 'You tell us how you want to live here: which months, who comes with you, what you never want to hear from the terrace.',
  },
  {
    title: 'A short list',
    text: 'We answer with three or four houses, some of them never advertised. For each one we say what is wrong with it as well as what is right.',
  },
  {
    title: 'Viewings, unhurried',
    text: 'We arrange them around your travel and meet you at the door. Come back at dusk if you like. Most people should.',
  },
  {
    title: 'Through to the keys',
    text: 'We introduce an independent lawyer, a surveyor and a tax adviser, and we stay with the purchase until it completes at the notary.',
  },
];

// Stand-in photographs from Wikimedia Commons. They show real public places, not the homes.
export const credits = [
  ['Limewashed wall, Santa Eulària des Riu', 'Gerda Arendt', 'CC0', 'https://commons.wikimedia.org/wiki/File:Entranca_to_Santa_Eul%C3%A0ria_des_Riu,_Ibiza.jpg'],
  ['House and garden, Balàfia', 'Gerda Arendt', 'CC0', 'https://commons.wikimedia.org/wiki/File:House_and_garden_with_dragon_tree,_Bal%C3%A0fia,_Ibiza.jpg'],
  ['Dalt Vila', 'Nicolas Vigier', 'CC0', 'https://commons.wikimedia.org/wiki/File:Dalt_Vila_(50600584928).jpg'],
  ['Port de Porroig', 'Jorge Cancela', 'CC BY 2.0', 'https://commons.wikimedia.org/wiki/File:Port_de_Porroig,_Eivissa.jpg'],
  ['House in Valldemossa', 'Malopez 21', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Valldemossa,_casa,_01.jpg'],
  ['Finca Balitx d’Avall', 'Rosa-Maria Rinkl', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Finca_Balitx_d%C2%B4Avall.jpg'],
  ['Courtyard, Finca Galatzó', 'Rafael Ortega Díaz', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Interior_Finca_Galatz%C3%B3_Mallorca.jpg'],
  ['Bay near Sant Josep', 'Kelly.ibiza', 'CC BY-SA 3.0', 'https://commons.wikimedia.org/wiki/File:Little_bay_in_sant_josep.JPG'],
  ['Deià', 'Fr. Diana Korn', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Dey%C3%A1,_en_Baleares_(Espa%C3%B1a).jpg'],
  ['Bell on a house wall, Valldemossa', 'Malopez 21', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Valldemossa,_campana_en_pared_de_casa.jpg'],
  ['Carrer Església, Fornalutx', 'Malopez 21', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Fornalutx,_Carrer_Esgl%C3%A9sia.jpg'],
];
