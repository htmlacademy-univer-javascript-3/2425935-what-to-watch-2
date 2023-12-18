import React, { useCallback, useMemo } from 'react';
import { Logo } from '../logo/logo';
import { Link, useNavigate } from 'react-router-dom';
import { RouteLinks } from '../../router/consts';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { ReducerName } from '../../types/reducer-name';
import { AuthorizationStatus } from '../../types/authorization-status';
import { logout } from '../../store/api-actions';

const enum ImgStyles {
  Width = 63,
  Height = 63,
}

interface Props {
  children?: React.ReactNode;
  className?: string;
  isLoginPage?: boolean;
}

export const Header: React.FunctionComponent<Props> = ({
  children,
  className = '',
  isLoginPage = false,
}) => {
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(
    (state) => state[ReducerName.Authorzation].authorizationStatus
  );
  const user = useAppSelector((state) => state[ReducerName.Authorzation].user);

  const hasAccess = authorizationStatus === AuthorizationStatus.Authorized;

  const dispatch = useAppDispatch();

  const handleSignOutClick = useCallback(() => {
    dispatch(logout());
    navigate(RouteLinks.Main);
  }, [dispatch, navigate]);

  const loginLogoutButton = useMemo(
    () =>
      hasAccess ? (
        <Link
          to={RouteLinks.Main}
          onClick={handleSignOutClick}
          className="user-block__link"
        >
          Sign out
        </Link>
      ) : (
        <Link to={RouteLinks.Login} className="user-block__link">
          Sign in
        </Link>
      ),
    [handleSignOutClick, hasAccess]
  );

  return (
    <header className={`page-header ${className}`}>
      <Logo />

      {children}

      {!isLoginPage && (
        <ul className="user-block">
          {hasAccess && (
            <li className="user-block__item">
              <Link to={RouteLinks.MyList}>
                <div className="user-block__avatar">
                  <img
                    src={user?.avatarUrl}
                    alt={user?.name}
                    width={ImgStyles.Width}
                    height={ImgStyles.Height}
                  />
                </div>
              </Link>
            </li>
          )}
          <li className="user-block__item">{loginLogoutButton}</li>
        </ul>
      )}
    </header>
  );
};
