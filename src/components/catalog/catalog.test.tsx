import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { Catalog } from './catalog';
import { ReducerName } from '../../types/reducer-name';
import { State } from '../../types/state';
import thunk from 'redux-thunk';
import { Genre } from '../../types/genre';
import { films } from '../../mocks/films';

const mockFilm = films[0];
const mockStore = configureMockStore<State>([thunk]);

describe('Catalog Component', () => {
  it('should render without errors', () => {
    const store = mockStore({
      [ReducerName.Main]: {
        genreFilms: [mockFilm],
        isFilmsLoading: false,
        films: films,
        currentGenre: Genre.DEFAULT_GENRE,
      },
    });

    render(
      <MemoryRouter>
        <Provider store={store}>
          <Catalog />
        </Provider>
      </MemoryRouter>
    );

    const filmsList = screen.getByTestId('films-list');
    expect(filmsList).toBeInTheDocument();
  });
});
