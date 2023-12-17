import React, { useLayoutEffect } from 'react';
import { FilmCard } from '../../components/film-card/film-card';
import { Catalog } from '../../components/catalog/catalog';
import { Footer } from '../../components/footer/footer';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { ReducerName } from '../../types/reducer-name';
import { fetchPromo } from '../../store/api-actions';
import { Spinner } from '../../components/spinner/spinner';

export const Main: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const promo = useAppSelector((state) => state[ReducerName.Main].promo);

  useLayoutEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(fetchPromo());
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  if(!promo) {
    return <Spinner />;
  }

  return (
    <>
      <FilmCard film={promo} />
      <div className="page-content">
        <Catalog />
        <Footer />
      </div>
    </>
  );
};
