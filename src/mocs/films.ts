const DEFAULT_WIDTH = 218;
const DEFAULT_HEIGHT = 327;


export interface FilmProps {
  id: number;
  title: string;
  imageSrc: string;
  alt: string;
  width: number;
  height: number;
}
interface FilmDescription {
  info: string;
  director: string;
  starring: string;
}

export interface FilmInfoProps extends FilmProps {
  genre: string;
  year?: number;
  rating?: number;
  ratingCount?: number;
  description: FilmDescription;
  bgSrc: string;
  video: string;
  runTime: string;
}

export const filmsInfo: FilmInfoProps[] = [
  {
    id: 1,
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    bgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    imageSrc: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    alt: 'Fantastic Beasts: The Crimes of Grindelwald',
    video:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    genre: 'Horror',
    year: 2018,
    rating: 7.3,
    ratingCount: 3500,
    description: {
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      director: 'David Yates',
      starring: 'Eddie Redmayne, Katherine Waterston, Johnny Depp',
    },
    runTime: '2 h 45 m',
  },
  {
    id: 2,
    title: 'Bohemian Rhapsody',
    bgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    imageSrc: 'img/bohemian-rhapsody.jpg',
    alt: 'Bohemian Rhapsody',
    video:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    genre: 'Documentary',
    year: 2018,
    rating: 8.0,
    ratingCount: 4500,
    description: {
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      director: 'Bryan Singer',
      starring: 'Rami Malek, Lucy Boynton, Gwilym Lee',
    },
    runTime: '1 h 57 m',
  },
  {
    id: 3,
    title: 'Macbeth',
    imageSrc: 'img/macbeth.jpg',
    bgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    alt: 'Macbeth',
    video:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    genre: 'Dramas',
    year: 2015,
    rating: 6.6,
    ratingCount: 2800,
    description: {
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      director: 'Justin Kurzel',
      starring: 'Michael Fassbender, Marion Cotillard, David Thewlis',
    },
    runTime: '2 h 10 m',
  },
  {
    id: 4,
    title: 'Aviator',
    imageSrc: 'img/aviator.jpg',
    alt: 'Aviator',
    bgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    video:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    genre: 'Dramas',
    year: 2004,
    rating: 7.5,
    ratingCount: 3200,
    description: {
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      director: 'Martin Scorsese',
      starring: 'Leonardo DiCaprio, Cate Blanchett, Kate Beckinsale',
    },
    runTime: '2 h 49 m',
  },
  {
    id: 5,
    title: 'We need to talk about Kevin',
    imageSrc: 'img/we-need-to-talk-about-kevin.jpg',
    alt: 'We need to talk about Kevin',
    bgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    video:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    genre: 'Dramas',
    year: 2011,
    rating: 7.5,
    ratingCount: 2700,
    description: {
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      director: 'Lynne Ramsay',
      starring: 'Tilda Swinton, John C. Reilly, Ezra Miller',
    },
    runTime: '1 h 52 m',
  },
  {
    id: 6,
    title: 'What We Do in the Shadows',
    imageSrc: 'img/what-we-do-in-the-shadows.jpg',
    alt: 'What We Do in the Shadows',
    bgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    video:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    genre: 'Comedies',
    year: 2014,
    rating: 7.7,
    ratingCount: 3100,
    description: {
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      director: 'Jemaine Clement, Taika Waititi',
      starring: 'Jemaine Clement, Taika Waititi, Jonathan Brugh',
    },
    runTime: '1 h 26 m',
  },
  {
    id: 7,
    title: 'Revenant',
    imageSrc: 'img/revenant.jpg',
    alt: 'Revenant',
    bgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    video:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    genre: 'Documentary',
    year: 2015,
    rating: 8.0,
    ratingCount: 3800,
    description: {
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      director: 'Alejandro González Iñárritu',
      starring: 'Leonardo DiCaprio, Tom Hardy, Domhnall Gleeson',
    },
    runTime: '2 h 36 m',
  },
  {
    id: 8,
    title: 'Johnny English',
    imageSrc: 'img/johnny-english.jpg',
    alt: 'Johnny English',
    bgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    video:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    genre: 'Comedies',
    year: 2003,
    rating: 6.2,
    ratingCount: 2400,
    description: {
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      director: 'Peter Howitt',
      starring: 'Rowan Atkinson, John Malkovich, Natalie Imbruglia',
    },
    runTime: '1 h 28 m',
  },
  {
    id: 9,
    title: 'Shutter Island',
    imageSrc: 'img/shutter-island.jpg',
    alt: 'Shutter Island',
    bgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    video:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    genre: 'Horror',
    year: 2010,
    rating: 8.2,
    ratingCount: 4100,
    description: {
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      director: 'Martin Scorsese',
      starring: 'Leonardo DiCaprio, Emily Mortimer, Mark Ruffalo',
    },
    runTime: '2 h 18 m',
  },
  {
    id: 10,
    title: 'Pulp Fiction',
    imageSrc: 'img/pulp-fiction.jpg',
    alt: 'Pulp Fiction',
    bgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    video:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    genre: 'Crime',
    year: 1994,
    rating: 8.9,
    ratingCount: 5000,
    description: {
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      director: 'Quentin Tarantino',
      starring: 'John Travolta, Uma Thurman, Samuel L. Jackson',
    },
    runTime: '2 h 34 m',
  },
  {
    id: 11,
    title: 'No Country for Old Men',
    imageSrc: 'img/no-country-for-old-men.jpg',
    alt: 'No Country for Old Men',
    bgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    video:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    genre: 'Crime',
    year: 2007,
    rating: 8.1,
    ratingCount: 4600,
    description: {
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      director: 'Joel Coen, Ethan Coen',
      starring: 'Tommy Lee Jones, Javier Bardem, Josh Brolin',
    },
    runTime: '2 h 2 m',
  },
  {
    id: 12,
    title: 'Snatch',
    imageSrc: 'img/snatch.jpg',
    alt: 'Snatch',
    bgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    video:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    genre: 'Comedies',
    year: 2000,
    rating: 8.3,
    ratingCount: 3900,
    description: {
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      director: 'Guy Ritchie',
      starring: 'Jason Statham, Brad Pitt, Benicio Del Toro',
    },
    runTime: '1 h 42 m',
  },
  {
    id: 13,
    title: 'Moonrise Kingdom',
    imageSrc: 'img/moonrise-kingdom.jpg',
    alt: 'Moonrise Kingdom',
    bgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    video:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    genre: 'Comedies',
    year: 2012,
    rating: 7.8,
    ratingCount: 3200,
    description: {
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      director: 'Wes Anderson',
      starring: 'Jared Gilman, Kara Hayward, Bruce Willis',
    },
    runTime: '1 h 34 m',
  },
  {
    id: 14,
    title: 'Seven Years in Tibet',
    imageSrc: 'img/seven-years-in-tibet.jpg',
    alt: 'Seven Years in Tibet',
    bgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    video:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    genre: 'Documentary',
    year: 1997,
    rating: 7.0,
    ratingCount: 2900,
    description: {
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      director: 'Jean-Jacques Annaud',
      starring: 'Brad Pitt, David Thewlis, BD Wong',
    },
    runTime: '2 h 16 m',
  },
  {
    id: 15,
    title: 'Midnight Special',
    imageSrc: 'img/midnight-special.jpg',
    alt: 'Midnight Special',
    bgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    video:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    genre: 'Sci-Fi',
    year: 2016,
    rating: 6.6,
    ratingCount: 2800,
    description: {
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      director: 'Jeff Nichols',
      starring: 'Michael Shannon, Joel Edgerton, Kirsten Dunst',
    },
    runTime: '1 h 52 m',
  },
  {
    id: 16,
    title: 'War of the Worlds',
    imageSrc: 'img/war-of-the-worlds.jpg',
    alt: 'War of the Worlds',
    bgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    video:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    genre: 'Sci-Fi',
    year: 2005,
    rating: 6.5,
    ratingCount: 2700,
    description: {
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      director: 'Steven Spielberg',
      starring: 'Tom Cruise, Dakota Fanning, Tim Robbins',
    },
    runTime: '2 h 56 m',
  },
  {
    id: 17,
    title: 'Dardjeeling Limited',
    imageSrc: 'img/dardjeeling-limited.jpg',
    alt: 'Dardjeeling Limited',
    video:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    bgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    genre: 'Kids & Family',
    year: 2007,
    rating: 7.2,
    ratingCount: 3100,
    description: {
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      director: 'Wes Anderson',
      starring: 'Owen Wilson, Adrien Brody, Jason Schwartzman',
    },
    runTime: '1 h 31 m',
  },
  {
    id: 18,
    title: 'Orlando',
    imageSrc: 'img/orlando.jpg',
    alt: 'Orlando',
    bgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    video:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    genre: 'Dramas',
    year: 1992,
    rating: 7.2,
    ratingCount: 2800,
    description: {
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      director: 'Sally Potter',
      starring: 'Tilda Swinton, Billy Zane, Quentin Crisp',
    },
    runTime: '1 h 34 m',
  },
  {
    id: 19,
    title: 'Mindhunter',
    imageSrc: 'img/mindhunter.jpg',
    alt: 'Mindhunter',
    bgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    video:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    genre: 'Crime',
    year: 2017,
    rating: 8.6,
    ratingCount: 4200,
    description: {
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      director: 'Joe Penhall',
      starring: 'Jonathan Groff, Holt McCallany, Anna Torv',
    },
    runTime: '2 h 10 m',
  },
  {
    id: 20,
    title: 'Midnight Special',
    imageSrc: 'img/midnight-special.jpg',
    alt: 'Midnight Special',
    bgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    video:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    genre: 'Sci-Fi',
    year: 2016,
    rating: 6.6,
    ratingCount: 2800,
    description: {
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      director: 'Jeff Nichols',
      starring: 'Michael Shannon, Joel Edgerton, Kirsten Dunst',
    },
    runTime: '1 h 52 m',
  },
  {
    id: 21,
    title: 'The Grand Budapest Hotel',
    imageSrc: 'img/the-grand-budapest-hotel-poster.jpg',
    alt: 'The Grand Budapest Hotel',
    bgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    video:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    genre: 'Dramas',
    year: 2014,
    rating: 8.9,
    ratingCount: 240,
    description: {
      info: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege. 
        \nGustave prides himself on providing first-class service to the hotels guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustaves lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
      director: 'Wes Anderson',
      starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe, and other',
    },
    runTime: '1 h 39 m',
  },
];
