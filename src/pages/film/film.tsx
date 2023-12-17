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
import { ReducerName } from '../../types/reducer-name';
import { fetchFilm, fetchReviews, fetchSimilar } from '../../store/api-actions';
import { AuthorizationStatus } from '../../types/authorization-status';
import { Spinner } from '../../components/spinner/spinner';
import { Page404 } from '../page-404/page-404.tsx';


export const Film: React.FunctionComponent = () => {
  const { id } = useParams();
  const isAuth =
    useAppSelector(
      (state) => state[ReducerName.Authorzation].authorizationStatus
    ) === AuthorizationStatus.AUTHORIZED;
  const dispatch = useAppDispatch();
  const film = useAppSelector((state) => state[ReducerName.Film].film);
  const isLoading = useAppSelector(
    (state) => state[ReducerName.Film].isLoading
  );

  const similar = useAppSelector((state) => state[ReducerName.Film].similar);

  useLayoutEffect(() => {
    let isMounted = true;

    if (isMounted && id) {
      dispatch(fetchFilm(id));
      dispatch(fetchSimilar(id));
      dispatch(fetchReviews(id));
    }
    return () => {
      isMounted = false;
    };
  }, [id, dispatch]);

  if (isLoading) {
    return <Spinner view='display' />;
  }

  if (!id) {
    return <Navigate to={RouteLinks.NOT_FOUND} />;
  }

  return film ? (
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

              <FilmCardButtons filmId={film.id} reviewButton={isAuth} isFavorite={film.isFavorite} />
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
        {!!similar.length && (
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <FilmsList films={similar} />
          </section>
        )}

        <Footer />
      </div>
    </>
  ) : (
    <Page404 />
  );
};
