import React from 'react';
import { filmsData } from '../../../../data/films-data';
import { SmallFilmCard } from './small-film-card';

export const FilmsList: React.FunctionComponent = () => (
  <div className="catalog__films-list">
    {filmsData.map((film) => (
      <SmallFilmCard film={film} key={film.id} />
    ))}
  </div>
);
