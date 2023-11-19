
import { createReducer } from '@reduxjs/toolkit';
import { setGenre } from './action';
import { DEFAULT_GENRE } from '../data/genre';
import { filmsInfo } from '../mocs/films';

const initialState = {
  films: filmsInfo,
  genre: DEFAULT_GENRE,
  genreFilms: filmsInfo,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setGenre, (state, action) => {
    const { genre } = action.payload;

    state.genre = genre;
    state.genreFilms =
      genre === DEFAULT_GENRE
        ? filmsInfo
        : filmsInfo.filter((film) => film.genre === genre);
  });
});

export { reducer };
