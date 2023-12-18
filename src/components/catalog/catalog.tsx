import React, { useCallback, useState } from 'react';
import { useAppSelector } from '../../hooks/store';
import { ReducerName } from '../../types/reducer-name';
import { Film } from '../../types/film';
import { GenreList } from './components/genre-list/genre-list';
import { FilmsList } from './components/films-list/films-list';
import { Button } from '../button/button';

const DEFAULT_LIST_LENGTH = 8;

interface Props {
  withoutGenre?: boolean;
  withoutButton?: boolean;
  listLength?: number;
  films?: Film[];
}

export const Catalog: React.FunctionComponent<Props> = ({
  withoutGenre = false,
  withoutButton = false,
  listLength,
  films,
}) => {
  const stateGenreFilms = useAppSelector((state) => state[ReducerName.Main].genreFilms);
  const [maxLength, setMaxLength] = useState(listLength || DEFAULT_LIST_LENGTH);

  const handleShowMoreClick = useCallback(()=>{
    setMaxLength((prev) => prev + DEFAULT_LIST_LENGTH);
  },[]);

  const showButton = !withoutButton && stateGenreFilms.length >= maxLength;
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      {!withoutGenre ? <GenreList /> : null}

      <FilmsList length={maxLength} films={films} />

      {showButton ? (
        <div className="catalog__more">
          <Button data-testid="show-more" label="Show more" className="catalog__button" type="button" onClick={handleShowMoreClick}/>
        </div>
      ) : null}
    </section>
  );
};
