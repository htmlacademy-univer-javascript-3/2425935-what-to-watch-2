import { render, screen } from '@testing-library/react';
import { FilmsList } from './films-list';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { ReducerName } from '../../../../types/reducer-name';
import { State } from '../../../../types/state';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { films } from '../../../../mocks/films';

const mockFilm = films[0];

const mockStore = configureMockStore<State>([thunk]);

describe('FilmsList Component', () => {
  it('should render FilmsList component correctly', () => {
    const store = mockStore({
      [ReducerName.Main]: {
        genreFilms: [mockFilm],
        isFilmsLoading: false,
      },
    });

    render(
      <MemoryRouter>
        <Provider store={store}>
          <FilmsList length={1} />
        </Provider>
      </MemoryRouter>

    );

    const filmTitle = screen.getByTestId('sample-film-title');

    expect(filmTitle).toBeInTheDocument();
  });

  it('should render loading spinner when films are loading', () => {
    const store = mockStore({
      [ReducerName.Main]: {
        genreFilms: [],
        isFilmsLoading: true,
      },
    });

    render(
      <Provider store={store}>
        <FilmsList length={1} />
      </Provider>
    );

    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });
});
