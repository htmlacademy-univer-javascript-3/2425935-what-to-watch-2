import { FunctionComponent, useCallback, useEffect, useMemo, useState } from 'react';
import { Overview } from './tab-panels/overview';
import { Tabs } from './tabs/tabs';
import { FilmDetails } from './tab-panels/film-details';
import { Reviews } from './tab-panels/reviews';
import { Film } from '../../types/film';
import { TTabs, TabTypes } from '../../types/tabs';

interface Props {
  film: Film;
}

export const FilmDescription: FunctionComponent<Props> = ({ film }) => {
  const [activeTab, setActiveTab] = useState<TTabs>(TabTypes.Overview);

  const handleTabClick = useCallback((tab: TTabs) => {
    setActiveTab(tab);
  }, []);

  const panel = useMemo(() => {
    switch (activeTab) {
      case 'Overview':
        return <Overview film={film} />;
      case 'Details':
        return <FilmDetails film={film} />;
      case 'Reviews':
        return <Reviews />;
      default:
        return null;
    }
  }, [activeTab, film]);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      setActiveTab(TabTypes.Overview);
    }

    return () => {
      isMounted = false;
    };
  }, [film.id]);

  return (
    <div className="film-card__desc">
      <Tabs onClick={handleTabClick} active={activeTab} />

      {panel}
    </div>
  );
};
