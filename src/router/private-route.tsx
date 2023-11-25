import { Navigate } from 'react-router-dom';
import { FunctionComponent } from 'react';
import { RouteLinks } from './consts';

interface Props {
  children: React.ReactElement;
  hasAccess?: boolean;
}

export const PrivateRoute: FunctionComponent<Props> = ({ children, hasAccess = false }) => hasAccess ? children : <Navigate to={RouteLinks.LOGIN} />;
