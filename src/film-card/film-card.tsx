import React from 'react';

interface FilmCardProps {
  title: string;
  imageUrl: string;
  link: string;
}

export const FilmCard: React.FunctionComponent<FilmCardProps> = ({
  title,
  imageUrl,
  link,
}) => (
  <article className="small-film-card catalog__films-card">
    <div className="small-film-card__image">
      <img src={imageUrl} alt={title} width="280" height="175" />
    </div>
    <h3 className="small-film-card__title">
      <a className="small-film-card__link" href={link}>
        {title}
      </a>
    </h3>
  </article>
);
