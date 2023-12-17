import { FunctionComponent, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { TTabs, TabTypes } from '../../../types/tabs';

interface Props {
  active: TTabs;
  onClick?: (tab: TTabs) => void;
}

export const Tabs: FunctionComponent<Props> = ({ active, onClick }) => {
  const handleTabClick = useCallback(
    (tab: TTabs) => {
      if (onClick) {
        onClick(tab);
      }
    },
    [onClick]
  );

  const tabs = Object.values(TabTypes);

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`film-nav__item ${
              tab === active ? 'film-nav__item--active' : ''
            }`}
            onClick={() => handleTabClick(tab)}
          >
            <Link to="#" className="film-nav__link">
              {tab}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
