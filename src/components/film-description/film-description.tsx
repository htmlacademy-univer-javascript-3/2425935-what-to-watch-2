import { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { FilmInfoProps } from '../../mocs/films';
import { Overview } from './tab-panels/overview';
import { FilmDetails } from './tab-panels/details';
import { FilmReviews } from './tab-panels/reviews';
import { Tabs } from './tabs/tabs';

interface Props {
  film: FilmInfoProps;
}

const tabsTypes = ['Overview', 'Details', 'Reviews'] as const;
type TTabs = typeof tabsTypes[number];

export const FilmDescription: FunctionComponent<Props> = ({ film }) => {
  const [activeTab, setActiveTab] = useState<TTabs>('Overview');

  const handleTabClick = (tab: string) => {
    const foundTab = tabsTypes.find((currentTab) => tab === currentTab);
    if (foundTab) {
      setActiveTab(foundTab);
    }
  };

  const panel = useMemo(() => {
    switch (activeTab) {
      case 'Overview':
        return <Overview film={film} />;
      case 'Details':
        return <FilmDetails film={film} />;
      case 'Reviews':
        return <FilmReviews />;
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
