import React, { useLayoutEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { RouteLinks } from '../../router/consts';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { Spinner } from '../../components/spinner/spinner';
import { ReducerName } from '../../types/reducer-name';
import { fetchFilm } from '../../store/api-actions';
import { Header } from '../../components/header/header';
import { Poster } from '../../components/poster/poster';
import { AddReviewForm } from '../../components/add-review-form/add-review-form';

export const AddReview: React.FunctionComponent = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector((state) => state[ReducerName.Film].film);
  const isLoading = useAppSelector((state) => state[ReducerName.Film].isLoading);

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
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundColor} alt={film.name} />
        </div>
        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">
                  {film.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to="" className="breadcrumbs__link">
                  Add review
                </Link>
              </li>
            </ul>
          </nav>
        </Header>

        <Poster
          src={film.posterImage}
          alt={film.name}
          className="film-card__poster--small"
        />
      </div>
      <AddReviewForm filmId={film.id} />
    </section>
  );
};
