import React, { FormEvent, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { setGenre } from '../../../../store/action';
import { useAppDispatch } from '../../../../hooks/store';

interface Props {
  genre: string;
  isActive: boolean;
}
export const Genre: React.FunctionComponent<Props> = ({ genre, isActive }) => {
  const dispatch = useAppDispatch();

  const handleClick = useCallback(
    (event: FormEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      dispatch(setGenre({ genre }));
    },
    [dispatch, genre]
  );

  return (
    <li
      className={`catalog__genres-item catalog__genres-item${
        isActive ? '--active' : ''
      }`}
    >
      <Link to="#" className="catalog__genres-link" onClick={handleClick}>
        {genre}
      </Link>
    </li>
  );
};
