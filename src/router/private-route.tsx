import { Navigate } from 'react-router-dom';
import { FunctionComponent } from 'react';
import { RouteLinks } from './consts';

interface PrivateRouteProps {
  children: JSX.Element;
  hasAccess?: boolean;
}

export const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({ children, hasAccess = true }) => hasAccess ? children : <Navigate to={RouteLinks.LOGIN} />;
