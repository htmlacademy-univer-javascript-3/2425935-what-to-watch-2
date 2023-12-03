import { FunctionComponent, useCallback, useEffect, useMemo, useState } from 'react';
import { Overview } from './tab-panels/overview';
import { Tabs } from './tabs/tabs';
import { FilmDetails } from './tab-panels/film-details';
import { Reviews } from './tab-panels/reviews';
import { Film } from '../../types/film';

interface Props {
  film: Film;
}

const TAB_TYPES = ['Overview', 'Details', 'Reviews'] as const;
type TTabs = typeof TAB_TYPES[number];

export const FilmDescription: FunctionComponent<Props> = ({ film }) => {
  const [activeTab, setActiveTab] = useState<TTabs>('Overview');

  const handleTabClick = useCallback((tab: string) => {
    const foundTab = TAB_TYPES.find((currentTab) => tab === currentTab);
    if (foundTab) {
      setActiveTab(foundTab);
    }
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
    setActiveTab('Overview');
  }, [film.id]);

  return (
    <div className="film-card__desc">
      <Tabs onClick={handleTabClick} active={activeTab} />

      {panel}
    </div>
  );
};
