import React from 'react';

const WIDTH = 19;
const HEIGHT = 19;

export const ButtonsContainer: React.FunctionComponent = () => (
  <div className="film-card__buttons">
    <button className="btn btn--play film-card__button" type="button">
      <svg viewBox="0 0 19 19" width={WIDTH} height={HEIGHT}>
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
    <button className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width={WIDTH} height={HEIGHT + 1}>
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">9</span>
    </button>
  </div>
);
