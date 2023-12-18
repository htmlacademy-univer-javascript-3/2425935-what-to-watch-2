import React, { FormEvent, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { setGenre } from '../../../../store/actions';
import { useAppDispatch } from '../../../../hooks/store';

interface Props {
  genre: string;
  isActive: boolean;
}

export const Genre: React.FunctionComponent<Props> = ({ genre, isActive }) => {
  const dispatch = useAppDispatch();

  const handleGenreClick = useCallback(
    (event: FormEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      dispatch(setGenre(genre));
    },
    [dispatch, genre]
  );

  return (
    <li
      className={`catalog__genres-item catalog__genres-item${
        isActive ? '--active' : ''
      }`}
    >
      <Link to="#" className="catalog__genres-link" onClick={handleGenreClick}>
        {genre}
      </Link>
    </li>
  );
};
