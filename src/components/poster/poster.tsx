import React from 'react';

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export const Poster: React.FunctionComponent<Props> = ({
  src,
  alt,
  width,
  height,
  className = '',
}) => (
  <div className={`film-card__poster ${className}`}>
    <img src={src} alt={alt} width={width} height={height} />
  </div>
);
