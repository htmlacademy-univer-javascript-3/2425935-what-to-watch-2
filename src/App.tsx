import React from 'react';
import { AppRouter } from './router/app-router';
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './components/scroll-to-top/scroll-to-top';
import { ToastContainer } from 'react-toastify';

export const App: React.FC = () => (
  <BrowserRouter>
    <ScrollToTop />
    <AppRouter />
    <ToastContainer />
  </BrowserRouter>
);
