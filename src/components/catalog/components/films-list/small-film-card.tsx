import React from 'react';
import { FilmProps } from '../../../../data/films-data';
import { Link } from 'react-router-dom';

interface SmallFilmCardProps {
  film: FilmProps;
}

export const SmallFilmCard: React.FunctionComponent<SmallFilmCardProps> = ({ film }) => {
  const { title, imageSrc, alt, width, height, link } = film;


  return(
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link to={link} className="small-film-card__link">
          {title}
        </Link>
      </h3>
    </article>
  );
};
