import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Film } from '../types/film';
import { Review } from '../types/review';
import { User } from '../types/user';
import { AuthorizationData } from '../types/authorization-data';
import { toast } from 'react-toastify';

export const fetchFilms = createAsyncThunk<
  Film[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('/films', async (_arg, { extra: api }) => {
  try {
    const { data } = await api.get<Film[]>('/films');
    return data;
  } catch (error) {
    toast.error('Error fetching films. Please try again later.');
    throw error;
  }
});

export const checkAuth = createAsyncThunk<
  User,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('/checkAuth', async (_arg, { extra: api }) => {
  const { data } = await api.get<User>('/login');
  return data;
});

export const login = createAsyncThunk<
  User,
  AuthorizationData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('/login', async ({ email, password }, { extra: api }) => {
  try {
    const { data } = await api.post<User>('/login', { email, password });
    return data;
  } catch (error) {
    toast.error('Error fetching login. Please try again later.');
    throw error;
  }
});

export const logout = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('/logout', async (_arg, { extra: api }) => {
  try {
    await api.delete('/logout');
  } catch (error) {
    toast.error('Error fetching logout. Please try again later.');
    throw error;
  }
});

export const fetchFilm = createAsyncThunk<
  Film,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('/films/id', async (filmId: string, { extra: api }) => {
  try {
    const { data } = await api.get<Film>(`/films/${filmId}`);
    return data;
  } catch (error) {
    toast.error('Error fetching film. Please try again later.');
    throw error;
  }
});

export const fetchFavoriteFilms = createAsyncThunk<
  Film[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('/favorite', async (_arg, { extra: api }) => {
  const { data } = await api.get<Film[]>('/favorite');
  return data;
});

export const fetchPromo = createAsyncThunk<
  Film,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('/promo', async (_arg, { extra: api }) => {
  try {
    const { data } = await api.get<Film>('/promo');
    return data;
  } catch (error) {
    toast.error('Error fetching promo film. Please try again later.');
    throw error;
  }
});

export const fetchReviews = createAsyncThunk<
  Review[],
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('/reviews', async (filmId: string, { extra: api }) => {
  try {
    const { data } = await api.get<Review[]>(`/comments/${filmId}`);
    return data;
  } catch (error) {
    toast.error('Error fetching reviews. Please try again later.');
    throw error;
  }
});

export const fetchSimilar = createAsyncThunk<
  Film[],
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('/films/id/similar', async (filmId: string, { extra: api }) => {
  try {
    const { data } = await api.get<Film[]>(`/films/${filmId}/similar`);
    return data;
  } catch (error) {
    toast.error('Error fetching similar films. Please try again later.');
    throw error;
  }
});

export const setFavorite = createAsyncThunk<
  Film,
  { status: boolean; filmId: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('/favorite/id/status', async ({ status, filmId }, { extra: api }) => {
  const { data } = await api.post<Film>(
    `/favorite/${filmId}/${status ? 1 : 0}`
  );
  return data;
});

export const addReview = createAsyncThunk<
  void,
  { comment: string; rating: number; filmId: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('/comments/id', ({ comment, rating, filmId }, { extra: api }) => {
  try {
    api.post(`/comments/${filmId}`, { comment, rating });
  } catch (error) {
    toast.error('Error setting review. Please try again later.');
    throw error;
  }
});
