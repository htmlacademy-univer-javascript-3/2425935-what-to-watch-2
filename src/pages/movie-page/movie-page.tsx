import React from 'react';
import { FilmCardButtons } from '../../components/film-card/components/film-card-buttons';
import { Navigate, useParams } from 'react-router-dom';
import { useFilmById } from '../../hooks/films';
import { RouteLinks } from '../../router/consts';
import { Header } from '../../components/header/header';
import { Poster } from '../../components/poster/poster';
import { FilmsList } from '../../components/catalog/components/films-list/films-list';
import { Footer } from '../../components/footer/footer';
import { FilmDescription } from '../../components/film-description/film-description.tsx';

const FEW_FILM_LIST = 4;

export const MoviePage: React.FunctionComponent = () => {
  const { id } = useParams();
  const film = useFilmById(id);

  if (!film) {
    return <Navigate to={RouteLinks.NOT_FOUND} />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.bgSrc} alt={film.imageSrc} />
          </div>

          <Header className="film-card__head" />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.year}</span>
              </p>

              <FilmCardButtons reviewButton />
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <Poster
              src={film.imageSrc}
              alt={film.alt}
              width={film.width}
              height={film.height}
              className="film-card__poster--big"
            />

            <FilmDescription film={film} />
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList length={FEW_FILM_LIST} genre={film.genre}/>
        </section>

        <Footer />
      </div>
    </>
  );
};
