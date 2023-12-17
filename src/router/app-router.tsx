import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { SignIn } from '../pages/sign-in/sign-in';
import { MyList } from '../pages/my-list/my-list';
import { AddReview } from '../pages/add-review/add-review';
import { RouteLinks } from './consts';
import { Player } from '../pages/player/player';
import { PrivateRoute } from './private-route';
import { Main } from '../pages/main/main';
import { Page404 } from '../pages/page-404/page-404';
import { Film } from '../pages/film/film';


export const AppRouter: React.FunctionComponent = () => (
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
      <Route index element={<Film />} />
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
);
