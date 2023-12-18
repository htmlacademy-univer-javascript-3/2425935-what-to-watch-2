import React, { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RouteLinks } from '../../../router/consts';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { ReducerName } from '../../../types/reducer-name';
import { AuthorizationStatus } from '../../../types/authorization-status';
import { setFavorite } from '../../../store/api-actions';

const enum ButtonSize {
  Width = 19,
  Height = 19,
}

interface Props {
  filmId: string;
  reviewButton?: boolean;
  isFavorite?: boolean;
}

export const FilmCardButtons: React.FunctionComponent<Props> = ({
  filmId,
  reviewButton = false,
  isFavorite,
}) => {
  const myFilmsCount = useAppSelector((state) => state[ReducerName.Main].favoriteCount);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(
    (state) => state[ReducerName.Authorzation].authorizationStatus
  );
  const notAuth = authorizationStatus === AuthorizationStatus.Unauthorized;

  const handleSetFavorite = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (notAuth) {
      navigate(RouteLinks.Login);
    }
    dispatch(setFavorite({ status: !isFavorite, filmId: filmId.toString() }));
  };

  return (
    <div className="film-card__buttons">
      <Link to={`/player/${filmId}`} className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width={ButtonSize.Width} height={ButtonSize.Height}>
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      <button className="btn btn--list film-card__button" type="button" onClick={handleSetFavorite}>
        {isFavorite ? (
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg>
        ) : (
          <svg viewBox="0 0 19 20" width={ButtonSize.Width} height={ButtonSize.Height + 1}>
            <use xlinkHref="#add"></use>
          </svg>
        )}
        <span>My list</span>
        <span className="film-card__count">{myFilmsCount}</span>
      </button>
      {reviewButton ? (
        <Link to={RouteLinks.Review} className="btn film-card__button">
          Add review
        </Link>
      ) : null}
    </div>
  );
};
