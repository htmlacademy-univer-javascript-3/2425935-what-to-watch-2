import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { SignIn } from '../pages/sign-in/sign-in';
import { MyList } from '../pages/my-list/my-list';
import { AddReview } from '../pages/add-review/add-review';
import { NotFoundPage } from '../pages/page-404/page-404';
import { Player } from '../pages/player/player';
import { MoviePage } from '../pages/movie-page/movie-page';
import { MainPage } from '../pages/main/main';
import { RouteLinks } from './consts';
import { PrivateRoute } from './private-route';


export const AppRouter: React.FunctionComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path={RouteLinks.MAIN} element={<MainPage />} />
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
      <Route path={RouteLinks.FILMS}>
        <Route path={RouteLinks.FILM} element={<MoviePage />} />
        <Route
          path={RouteLinks.REVIEW}
          element={
            <PrivateRoute>
              <AddReview />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path={RouteLinks.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
