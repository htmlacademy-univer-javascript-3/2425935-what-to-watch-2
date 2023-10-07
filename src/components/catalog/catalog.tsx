import React from 'react';
import { FilmsList } from './components/films-list/films-list';
import { GenreList } from './components/genre-list/genre-list';

export const Catalog: React.FunctionComponent = () => (
  <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>

    <GenreList />

    <FilmsList />

    <div className="catalog__more">
      <button className="catalog__button" type="button">
        Show more
      </button>
    </div>
  </section>
);
