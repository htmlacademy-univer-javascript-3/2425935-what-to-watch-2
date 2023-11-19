import React, { useState } from 'react';
import { SmallFilmCard } from './small-film-card';
import { useAppSelector } from '../../../../hooks/store';

interface Props {
  length?: number;
  genre? : string;
}

export const FilmsList: React.FunctionComponent<Props> = ({
  length,
  genre,
}) => {
  const stateGenreFilms = useAppSelector((state) => state.genreFilms);
  const stateFilms = useAppSelector((state) => state.films);

  const [activeFilm, setActiveFilm] = useState<number | null>(null);

  const handleCardHover = (filmId: number) => {
    setActiveFilm(filmId);
  };

  const handleCardLeave = () => {
    setActiveFilm(null);
  };

  const filteredFilms = genre
    ? stateFilms.filter((film) => film.genre === genre)
    : stateGenreFilms;

  return (
    <div className="catalog__films-list">
      {filteredFilms.slice(0, length).map((film) => (
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
