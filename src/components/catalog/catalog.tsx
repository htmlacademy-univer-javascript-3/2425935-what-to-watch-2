import React from 'react';
import { FilmsList } from './components/films-list/films-list';
import { GenreList } from './components/genre-list/genre-list';

interface Props {
  withoutGenre?: boolean;
  withoutButton?: boolean;
  listLength?: number;
}

export const Catalog: React.FunctionComponent<Props> = ({
  withoutGenre = false,
  withoutButton = false,
  listLength
}) => (
  <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>

    {!withoutGenre ? <GenreList /> : null}

    <FilmsList length={listLength} />

    {!withoutButton ? (
      <div className="catalog__more">
        <button className="catalog__button" type="button">
          Show more
        </button>
      </div>
    ) : null}
  </section>
);
