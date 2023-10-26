import { useMemo } from 'react';
import { FilmInfoProps, filmsInfo } from '../mocs/films';

const findFilmById = (films: FilmInfoProps[], id: string) => films.find((film) => film.id === +id);

export const useFilmById = (id = '') => {
  const film = useMemo(() => findFilmById(filmsInfo, id), [id]);

  return film;
};

export const useFilmRating = (rating = 0) => {
  if (rating >= 9) {
    return 'Excellent';
  } else if (rating >= 8) {
    return 'Very good';
  } else if (rating >= 7) {
    return 'Good';
  } else if (rating >= 6) {
    return 'Average';
  } return 'Below average';
};

enum TimeUnit {
  Hours = 'hours',
  Minutes = 'minutes',
  Seconds = 'seconds',
}

export const formatTime = (timeInSeconds: number) => {
  const timeUnits = [
    { unit: TimeUnit.Hours, divisor: 3600 },
    { unit: TimeUnit.Minutes, divisor: 60 },
    { unit: TimeUnit.Seconds, divisor: 1 },
  ];

  const formattedTime = timeUnits
    .map(({ divisor }) => {
      const value = Math.floor(timeInSeconds / divisor);
      timeInSeconds %= divisor;
      return String(value).padStart(2, '0');
    })
    .join(':');

  return formattedTime;
};
