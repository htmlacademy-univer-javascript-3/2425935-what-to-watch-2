import React from 'react';
import { Header } from '../header/header';
import { Poster } from '../poster/poster';
import { FilmCardButtons } from './components/film-card-buttons';
import { Film } from '../../types/films';


interface Props {
  film: Film;
}

const enum ImgStyles {
  WIDTH = 218,
  HEIGHT = 327,
}

export const FilmCard: React.FunctionComponent<Props> = ({ film }) => {
  const { backgroundImage, name, genre, released, id, posterImage } = film;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <Header className="film-card__head" />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <Poster src={posterImage} alt={name} width={ImgStyles.WIDTH} height={ImgStyles.HEIGHT} />

          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>

            <FilmCardButtons filmId={id} />
          </div>
        </div>
      </div>
    </section>
  );
};
