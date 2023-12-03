import React, { useState } from 'react';
import { SmallFilmCard } from './small-film-card';
import { useAppSelector } from '../../../../hooks/store';
import { Spinner } from '../../../spinner/spinner';
import { ReducerName } from '../../../../types/reducer-name';
import { Film } from '../../../../types/film';

interface Props {
  length?: number;
  similar?: Film[];
}

export const FilmsList: React.FunctionComponent<Props> = ({
  length,
  similar,
}) => {
  const stateGenreFilms = useAppSelector(
    (state) => state[ReducerName.Main].genreFilms
  );
  const isLoading = useAppSelector(
    (state) => state[ReducerName.Main].isFilmsLoading
  );

  const [activeFilm, setActiveFilm] = useState<string | null>(null);

  const handleCardHover = (filmId: string) => {
    setActiveFilm(filmId);
  };

  const handleCardLeave = () => {
    setActiveFilm(null);
  };

  const filteredFilms = similar || stateGenreFilms;

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