import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Page404 } from './page-404';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import { AuthorizationStatus } from '../../types/authorization-status';
import { ReducerName } from '../../types/reducer-name';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<State>(middlewares);

describe('Page404 Component', () => {
  it('should render 404 page', () => {
    const store = mockStore({
      [ReducerName.Authorzation]: {
        authorizationStatus: AuthorizationStatus.AUTHORIZED,
        user: null,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/invalid-path']}>
          <Routes>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const notFoundTitle = screen.getByText(/404 Not Found/i);
    const mainPageLink = screen.getByText(/На главную/i);

    expect(notFoundTitle).toBeInTheDocument();
    expect(mainPageLink).toBeInTheDocument();
  });
});
