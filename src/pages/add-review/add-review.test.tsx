import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AddReview } from './add-review';
import { ReducerName } from '../../types/reducer-name';
import { RouteLinks } from '../../router/consts';
import thunk from 'redux-thunk';
import { ThunkDispatch, Action } from '@reduxjs/toolkit';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import { AuthorizationStatus } from '../../types/authorization-status';
import { films } from '../../mocks/films';


const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
>(middlewares);

describe('AddReview Component', () => {
  it('should render loading spinner while fetching film data', () => {
    const store = mockStore({
      [ReducerName.Film]: {
        film: null,
        isLoading: true,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`${RouteLinks.Films}/1/review`]}>
          <Routes>
            <Route path={`${RouteLinks.Films}/:id/review`} element={<AddReview />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });

  it('should render 404 page when film ID is not available', () => {
    const store = mockStore({
      [ReducerName.Film]: {
        film: null,
        isLoading: false,
      },
      [ReducerName.Authorzation]: {
        authorizationStatus: AuthorizationStatus.Authorized,
        user: null,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`${RouteLinks.Films}/invalidID/review`]}>
          <Routes>
            <Route path={`${RouteLinks.Films}/:id/review`} element={<AddReview />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/404 Not Found/)).toBeInTheDocument();

  });

  it('should render AddReview page with film data', () => {
    const user = {
      name: 'John Doe',
      avatarUrl: 'path/to/avatar.jpg',
      email: 'john@example.com',
      id: 123,
      token: '123433',
    };
    const store = mockStore({
      [ReducerName.Film]: {
        film: films[0],
        isLoading: false,
      },
      [ReducerName.Authorzation]: {
        authorizationStatus: AuthorizationStatus.Authorized,
        user: user,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`${RouteLinks.Films}/1/review`]}>
          <Routes>
            <Route path={`${RouteLinks.Films}/:id/review`} element={<AddReview />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const addReviewForm = screen.getByText(/Add review/);
    expect(addReviewForm).toBeInTheDocument();
  });
});
