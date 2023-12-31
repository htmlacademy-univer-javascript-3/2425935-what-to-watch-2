import { createSlice } from '@reduxjs/toolkit';
import { ReducerName } from '../../types/reducer-name';
import { MainReducerState } from '../../types/main-reducer-state';
import {
  fetchFavoriteFilms,
  fetchFilms,
  fetchPromo,
  setFavorite,
  logout,
} from '../api-actions';
import { setError, setGenre } from '../actions';
import { Genre } from '../../types/genre';

const initialState: MainReducerState = {
  films: [],
  genreFilms: [],
  currentGenre: Genre.DefaultGenre,
  isFilmsLoading: false,
  error: null,
  promo: null,
  favoriteFilms: [],
  favoriteCount: 0,
};

export const mainReducer = createSlice({
  name: ReducerName.Main,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setGenre, (state, action) => {
        state.currentGenre = action.payload;
        state.genreFilms =
          action.payload === Genre.DefaultGenre
            ? state.films
            : state.films.filter((film) => film.genre === action.payload);
      })
      .addCase(setError, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchFilms.pending, (state) => {
        state.isFilmsLoading = true;
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.isFilmsLoading = false;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload;
        state.genreFilms = state.films;
        state.isFilmsLoading = false;
      })
      .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.favoriteCount = action.payload.length;
      })
      .addCase(fetchFavoriteFilms.rejected, (state) => {
        state.favoriteFilms = [];
        state.favoriteCount = 0;
      })
      .addCase(fetchPromo.fulfilled, (state, action) => {
        state.promo = action.payload;
      })
      .addCase(setFavorite.fulfilled, (state, action) => {
        if (state.promo && action.payload.id === state.promo.id) {
          state.promo = action.payload;
        }
        state.favoriteCount += action.payload.isFavorite ? 1 : -1;
      })
      .addCase(logout.fulfilled, (state) => {
        state.favoriteFilms = [];
        state.favoriteCount = 0;
        if (state.promo) {
          state.promo.isFavorite = false;
        }
      });
  },
});
