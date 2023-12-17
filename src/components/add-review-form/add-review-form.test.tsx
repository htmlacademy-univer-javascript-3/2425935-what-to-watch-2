import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AuthorizationStatus } from '../../types/authorization-status';
import { Genre } from '../../types/genre';
import { ReducerName } from '../../types/reducer-name';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import thunk from 'redux-thunk';
import { AddReviewForm } from './add-review-form';
import { films } from '../../mocks/films';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
>(middlewares);
const mockFilm = films[0];

describe('AddReviewForm Component', () => {
  const store = mockStore({
    [ReducerName.Authorzation]: {
      authorizationStatus: AuthorizationStatus.AUTHORIZED,
      user: null,
    },
    [ReducerName.Film]: {
      film: mockFilm,
      reviews: [],
      similar: [],
      isLoading: false,
    },
    [ReducerName.Main]: {
      films: [mockFilm],
      genreFilms: [],
      currentGenre: Genre.DEFAULT_GENRE,
      isFilmsLoading: false,
      error: null,
      promo: mockFilm,
      favoriteFilms: [],
      favoriteCount: 0,
    },
  });

  it('should render AddReviewForm elements correctly', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AddReviewForm filmId="1" />
        </Provider>
      </MemoryRouter>
    );

    const ratingInputs = screen.getAllByRole('radio', { name: /Rating \d/ });
    const reviewTextarea = screen.getByTestId('review-text');
    const submitButton = screen.getByRole('button', { name: /Post/ });

    expect(ratingInputs).toHaveLength(10);
    expect(reviewTextarea).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should update review', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AddReviewForm filmId="1" />
        </Provider>
      </MemoryRouter>
    );

    const ratingInputs = screen.getAllByRole('radio', { name: /Rating \d/ });
    const reviewTextarea = screen.getByTestId('review-text');

    fireEvent.click(ratingInputs[0]);
    fireEvent.change(reviewTextarea, { target: { value: 'This is a review.' } });

    expect(ratingInputs[0]).toBeChecked();
    expect(reviewTextarea).toHaveValue('This is a review.');
  });

  it('should disable submit button when rating and review text are incorrect', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AddReviewForm filmId="1" />
        </Provider>
      </MemoryRouter>
    );

    const submitButton = screen.getByRole('button', { name: 'Post' });

    expect(submitButton).toBeDisabled();

    fireEvent.click(screen.getByTestId('rating-1'));
    fireEvent.change(screen.getByTestId('review-text'), {
      target: { value: 'Short' },
    });

    expect(submitButton).toBeDisabled();
  });

  it('should enable submit button when rating and review text are correct', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AddReviewForm filmId="1" />
        </Provider>
      </MemoryRouter>
    );

    const submitButton = screen.getByRole('button', { name: 'Post' });

    fireEvent.click(screen.getByRole('radio', { name: /Rating 5/ }));
    fireEvent.change(screen.getByTestId('review-text'), {
      target: { value: 'A masterpiece that transcends genres, delivering a spellbinding experience from start to finish.' },
    });

    expect(submitButton).not.toBeDisabled();
  });
});
