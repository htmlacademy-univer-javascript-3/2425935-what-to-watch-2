import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/footer/footer';

export const NotFoundPage: React.FunctionComponent = () => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <h1 className="page-title user-page__title">404 Not Found</h1>
    </header>
    <div className="sign-in user-page__content">
      <div className="sign-in__submit">
        <Link to="/">
          <button className="sign-in__btn" type="submit">
            На главную
          </button>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);
