import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useFilmById } from '../../hooks/films';
import { RouteLinks } from '../../router/consts';
import { Header } from '../../components/header/header';
import { Poster } from '../../components/poster/poster';

export const AddReview: React.FunctionComponent = () => {
  const { id } = useParams();
  const film = useFilmById(id);

  if (!film) {
    return <Navigate to={RouteLinks.NOT_FOUND} />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.bgSrc} alt={film.imageSrc} />
        </div>
        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">
                  {film.title}
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
          src={film.imageSrc}
          alt={film.alt}
          width={film.width}
          height={film.height}
          className="film-card__poster--small"
        />
      </div>
      <AddReview />
    </section>
  );
};
