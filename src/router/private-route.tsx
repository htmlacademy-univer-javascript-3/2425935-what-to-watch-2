import { Navigate } from 'react-router-dom';
import { FunctionComponent } from 'react';
import { useAppSelector } from '../hooks/store';
import { AuthorizationStatus } from '../types/authorization-status';
import { ReducerName } from '../types/reducer-name';

interface Props {
  children: React.ReactElement;
}

export const PrivateRoute: FunctionComponent<Props> = ({ children }) => {
  const authorizationStatus = useAppSelector(
    (state) => state[ReducerName.Authorzation].authorizationStatus
  );
  const notAuth = authorizationStatus === AuthorizationStatus.Unauthorized;

  return !notAuth ? children : <Navigate to={'/login'} />;
};
