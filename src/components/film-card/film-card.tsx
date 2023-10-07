import React from 'react';
import { FilmProps } from './props';
import { ButtonsContainer } from './components/film-card-buttons';
import { Header } from '../header/header';


interface FilmCardProps {
  film: FilmProps;
}
const WIDTH = 218;
const HEIGHT = 327;

export const FilmCard: React.FunctionComponent<FilmCardProps> = ({ film }) => {
  const { img, title, genre, year } = film;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img
          src={img.bgSrc}
          alt={img.alt}
        />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img
              src={img.src}
              alt={img.alt}
              width={WIDTH}
              height={HEIGHT}
            />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{title}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{year}</span>
            </p>

            <ButtonsContainer />
          </div>
        </div>
      </div>
    </section>
  );
};
