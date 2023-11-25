import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { SignIn } from '../pages/sign-in/sign-in';
import { MyList } from '../pages/my-list/my-list';
import { AddReview } from '../pages/add-review/add-review';
import { MoviePage } from '../pages/movie-page/movie-page';
import { RouteLinks } from './consts';
import { Player } from '../pages/player/player';
import { PrivateRoute } from './private-route';
import { ScrollToTop } from '../components/scroll-to-top/scroll-to-top';
import { Main } from '../pages/main/main';
import { Page404 } from '../pages/page-404/page-404';


export const AppRouter: React.FunctionComponent = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path={RouteLinks.MAIN} element={<Main />} />
      <Route path={RouteLinks.LOGIN} element={<SignIn />} />
      <Route
        path={RouteLinks.MY_LIST}
        element={
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        }
      />
      <Route path={RouteLinks.PLAYER} element={<Player />} />
      <Route path={RouteLinks.FILM}>
        <Route index element={<MoviePage />} />
        <Route
          path={RouteLinks.REVIEW}
          element={
            <PrivateRoute>
              <AddReview />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path={RouteLinks.NOT_FOUND} element={<Page404 />} />
    </Routes>
  </BrowserRouter>
);
