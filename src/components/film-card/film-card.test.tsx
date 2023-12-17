import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { FilmCard } from './film-card';
import { ReducerName } from '../../types/reducer-name';
import { AuthorizationStatus } from '../../types/authorization-status';
import { Genre } from '../../types/genre';
import { films } from '../../mocks/films';

const mockStore = configureMockStore();

const mockFilm = films[0];

describe('FilmCard Component', () => {
  const initialState = {
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
  };

  it('should render FilmCard component', () => {
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <FilmCard film={mockFilm} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.genre)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.released)).toBeInTheDocument();
  });

  it('should have correct alt text for the background image', () => {
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <FilmCard film={mockFilm} />
        </MemoryRouter>
      </Provider>
    );

    const backgroundImageElement = screen.getByTestId('film-background-image');

    expect(backgroundImageElement).toHaveAttribute('alt', mockFilm.name);
  });
});
