import React from 'react';
import { Genre } from './genre';
import { GENRE_LIST } from '../../../../data/genre-list';

export const GenreList: React.FunctionComponent = () => (
  <ul className="catalog__genres-list">
    {GENRE_LIST.map((genre) => (
      <Genre genre={genre.name} isActive={genre.isActive} key={genre.id} />
    ))}
  </ul>
);
