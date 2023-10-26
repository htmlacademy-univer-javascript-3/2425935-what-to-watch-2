import React from 'react';
import { FilmProps } from './props';
import { Header } from '../header/header';
import { Poster } from '../poster/poster';
import { FilmCardButtons } from './components/film-card-buttons';


interface Props {
  film: FilmProps;
}

const enum ImgStyles {
  WIDTH = 218,
  HEIGHT = 327,
}

export const FilmCard: React.FunctionComponent<Props> = ({ film }) => {
  const { img, title, genre, year } = film;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img
          src={img.bgSrc}
          alt={img.alt}
        />
      </div>

      <Header className="film-card__head" />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <Poster src={img.src} alt={img.alt} width={ImgStyles.WIDTH} height={ImgStyles.HEIGHT} />

          <div className="film-card__desc">
            <h2 className="film-card__title">{title}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{year}</span>
            </p>

            <FilmCardButtons />
          </div>
        </div>
      </div>
    </section>
  );
};
