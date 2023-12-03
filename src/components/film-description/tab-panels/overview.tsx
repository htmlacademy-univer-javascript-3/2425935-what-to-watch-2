import { FunctionComponent } from 'react';
import { getFilmRating } from '../../../utils/utils';
import { Film } from '../../../types/film';

interface Props {
  film: Film;
}

export const Overview: FunctionComponent<Props> = ({ film }) => {
  const {
    rating,
    scoresCount,
    director,
    starring,
    description,
  } = film;

  const filmRatingLevel = getFilmRating(rating);

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{filmRatingLevel}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {starring.join(', ')}</strong>
        </p>
      </div>
    </>
  );
};
