import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import { AuthorizationStatus } from '../../types/authorization-status';

import { RouteLinks } from '../../router/consts';
import { ReducerName } from '../../types/reducer-name';
import { films } from '../../mocks/films';
import { Film } from './film';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<State>(middlewares);

const film = films[0];
const similar = films[1];


describe('Film Component', () => {
  it('should render loading spinner while fetching film data', () => {
    const store = mockStore({
      [ReducerName.Film]: {
        film: null,
        isLoading: true,
      },
      [ReducerName.Authorzation]: {
        authorizationStatus: AuthorizationStatus.AUTHORIZED,
        user: null,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`${RouteLinks.FILMS}/1`]}>
          <Routes>
            <Route path={`${RouteLinks.FILMS}/:id`} element={<Film />} />
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
        authorizationStatus: AuthorizationStatus.AUTHORIZED,
        user: null,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`${RouteLinks.FILMS}/invalidID`]}>
          <Routes>
            <Route path={`${RouteLinks.FILMS}/:id`} element={<Film />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/404 Not Found/)).toBeInTheDocument();
  });

  it('should render film page with film data', async () => {
    const store = mockStore({
      [ReducerName.Film]: {
        film: film,
        isLoading: false,
        similar: [similar],
      },
      [ReducerName.Authorzation]: {
        authorizationStatus: AuthorizationStatus.AUTHORIZED,
        user: {
          name: 'John Doe',
          avatarUrl: 'path/to/avatar.jpg',
          email: 'john@example.com',
          id: 123,
          token: '123433',
        },
      },
      [ReducerName.Main]: {
        favoriteCount: 0,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`${RouteLinks.FILMS}/1`]}>
          <Routes>
            <Route path={`${RouteLinks.FILMS}/:id`} element={<Film />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      const filmTitle = screen.getByText(film.name);
      expect(filmTitle).toBeInTheDocument();
    });

    const similarFilm1 = screen.getByText(similar.name);
    expect(similarFilm1).toBeInTheDocument();
  });
});
