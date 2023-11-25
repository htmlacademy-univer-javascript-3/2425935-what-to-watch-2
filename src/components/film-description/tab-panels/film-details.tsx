import { FunctionComponent, ReactNode } from 'react';
import { Film } from '../../../types/films';

interface FilmDetailsItemProps {
  name: string;
  children: ReactNode;
}

export const FilmDetailsItem: FunctionComponent<FilmDetailsItemProps> = ({
  name,
  children,
}) => (
  <p className="film-card__details-item">
    <strong className="film-card__details-name">{name}</strong>
    <span className="film-card__details-value">{children}</span>
  </p>
);


interface FilmDetailsProps {
  film: Film;
}

export const FilmDetails: FunctionComponent<FilmDetailsProps> = ({ film }) => {
  const { genre, runTime, director, released, starring } = film;

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <FilmDetailsItem name="Director">{director}</FilmDetailsItem>
        <FilmDetailsItem name="Starring">{starring.join(', ')}</FilmDetailsItem>
      </div>

      <div className="film-card__text-col">
        <FilmDetailsItem name="Run Time">{runTime}</FilmDetailsItem>
        <FilmDetailsItem name="Genre">{genre}</FilmDetailsItem>
        <FilmDetailsItem name="Released">{released}</FilmDetailsItem>
      </div>
    </div>
  );
};
