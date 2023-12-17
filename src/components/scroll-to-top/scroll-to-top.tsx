import { FunctionComponent, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop: FunctionComponent = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      window.scrollTo(0, 0);
    }

    return () => {
      isMounted = false;
    };
  }, [pathname]);

  return null;
};
