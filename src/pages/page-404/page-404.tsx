import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { RouteLinks } from '../../router/consts';

export const Page404: React.FunctionComponent = () => (
  <div className="user-page">
    <Header className="user-page__head">
      <h1 className="page-title user-page__title">404 Not Found</h1>
    </Header>
    <div className="sign-in user-page__content">
      <div className="sign-in__submit">
        <Link className="sign-in__btn"
          style={{textDecoration: 'none'}}
          to={RouteLinks.MAIN}
        >
          <button className="sign-in__btn" type="submit">
            На главную
          </button>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);
