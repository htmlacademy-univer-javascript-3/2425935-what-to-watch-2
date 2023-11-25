import React, { useState } from 'react';
import { SmallFilmCard } from './small-film-card';
import { useAppSelector } from '../../../../hooks/store';
import { Spinner } from '../../../spinner/spinner';

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
  const isLoading = useAppSelector((state) => state.isFilmsLoading);

  const [activeFilm, setActiveFilm] = useState<string | null>(null);

  const handleCardHover = (filmId: string) => {
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
      {isLoading ? (
        <Spinner />
      ) : (
        filteredFilms
          .slice(0, length)
          .map((film) => (
            <SmallFilmCard
              film={film}
              key={film.id}
              isActive={film.id === activeFilm}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            />
          ))
      )}
    </div>
  );
};
