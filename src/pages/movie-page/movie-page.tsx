import React, { useLayoutEffect } from 'react';
import { FilmCardButtons } from '../../components/film-card/components/film-card-buttons';
import { Navigate, useParams } from 'react-router-dom';
import { RouteLinks } from '../../router/consts';
import { Header } from '../../components/header/header';
import { Poster } from '../../components/poster/poster';
import { FilmsList } from '../../components/catalog/components/films-list/films-list';
import { Footer } from '../../components/footer/footer';
import { FilmDescription } from '../../components/film-description/film-description.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { fetchFilm } from '../../store/api-action';
import { Spinner } from '../../components/spinner/spinner';

const FEW_FILM_LIST = 4;

export const MoviePage: React.FunctionComponent = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector((state) => state.film);
  const isLoading = useAppSelector((state) => state.isFilmLoading);

  useLayoutEffect(() => {
    if (id) {
      dispatch(fetchFilm(id));
    }
  }, [id, dispatch]);

  if (isLoading || !film) {
    return <Spinner view='display' />;
  }

  if ((!film && !isLoading) || !id) {
    return <Navigate to={RouteLinks.NOT_FOUND} />;
  }

  return (
    <>
      <section
        className="film-card film-card--full"
        style={{ backgroundColor: film.backgroundColor }}
      >
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <Header className="film-card__head" />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <FilmCardButtons filmId={film.id} />
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <Poster
              src={film.posterImage}
              alt={film.name}
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
