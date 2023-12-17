import React from 'react';
import { AppRouter } from './router/app-router';
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './components/scroll-to-top/scroll-to-top';

export const App: React.FC = () => (
  <BrowserRouter>
    <ScrollToTop />
    <AppRouter />
  </BrowserRouter>
);
