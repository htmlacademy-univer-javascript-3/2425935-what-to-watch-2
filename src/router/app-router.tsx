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
    <Route path={RouteLinks.Main} element={<Main />} />
    <Route path={RouteLinks.Login} element={<SignIn />} />
    <Route
      path={RouteLinks.MyList}
      element={
        <PrivateRoute>
          <MyList />
        </PrivateRoute>
      }
    />
    <Route path={RouteLinks.Player} element={<Player />} />
    <Route path={RouteLinks.Film}>
      <Route index element={<Film />} />
      <Route
        path={RouteLinks.Review}
        element={
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        }
      />
    </Route>
    <Route path={RouteLinks.NotFound} element={<Page404 />} />
  </Routes>
);
