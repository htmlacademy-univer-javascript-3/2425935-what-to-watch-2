import React, { useState } from 'react';
import { SmallFilmCard } from './small-film-card';
import { filmsInfo } from '../../../../mocs/films';

interface Props {
  length?: number;
}

export const FilmsList: React.FunctionComponent<Props> = ({
  length = filmsInfo.length,
}) => {
  const [activeFilm, setActiveFilm] = useState<number | null>(null);

  const handleCardHover = (filmId: number) => {
    setActiveFilm(filmId);
  };

  const handleCardLeave = () => {
    setActiveFilm(null);
  };

  return (
    <div className="catalog__films-list">
      {filmsInfo.slice(0, length).map((film) => (
        <SmallFilmCard
          film={film}
          key={film.id}
          isActive={film.id === activeFilm}
          onMouseEnter={handleCardHover}
          onMouseLeave={handleCardLeave}
        />
      ))}
    </div>
  );
};
