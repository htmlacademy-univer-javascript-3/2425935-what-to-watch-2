import React from 'react';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Catalog } from '../../components/catalog/catalog';

const LIST_LENGTH = 9;

export const MyList: React.FunctionComponent = () => (
  <div className="user-page">
    <Header className="user-page__head">
      <h1 className="page-title user-page__title">
        My list <span className="user-page__film-count">{LIST_LENGTH}</span>
      </h1>
    </Header>

    <Catalog withoutButton withoutGenre listLength={LIST_LENGTH} />

    <Footer />
  </div>
);
