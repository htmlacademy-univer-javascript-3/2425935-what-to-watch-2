import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { RouteLinks } from '../../../../router/consts';
import { FilmInfoProps } from '../../../../mocs/films';
import { VideoPlayer } from '../../../videoplayer/videoplayer';

interface Props {
  film: FilmInfoProps;
  isActive?: boolean;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}

export const SmallFilmCard: React.FunctionComponent<Props> = ({
  film,
  isActive,
  onMouseEnter,
  onMouseLeave,
}) => {
  const { title, imageSrc, alt, width, height, id, video, bgSrc } = film;

  const handleMouseEnter = useCallback(() => {
    onMouseEnter(id);
  }, [id, onMouseEnter]);

  return (
    <article
      className={'small-film-card catalog__films-card'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onMouseLeave}
      data-active={isActive}
    >
      <div className="small-film-card__image">
        {isActive ? (
          <VideoPlayer src={video} poster={bgSrc} />
        ) : (
          <img src={imageSrc} alt={alt} width={width} height={height} />
        )}
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={`${RouteLinks.FILMS}/${id}`}
        >
          {title}
        </Link>
      </h3>
    </article>
  );
};
