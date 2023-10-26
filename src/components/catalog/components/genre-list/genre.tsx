import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  genre: string;
  isActive: boolean;
}
export const Genre: React.FunctionComponent<Props> = ({ genre, isActive }) => (
  <li
    className={`catalog__genres-item catalog__genres-item${
      isActive ? '--active' : ''
    }`}
  >
    <Link to="#" className="catalog__genres-link">
      {genre}
    </Link>
  </li>
);
