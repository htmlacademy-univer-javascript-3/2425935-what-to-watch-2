import React from 'react';
import { Logo } from '../logo/logo';

export const Footer: React.FunctionComponent = () => (
  <footer className="page-footer">
    <Logo className='logo__link--light' />

    <div className="copyright">
      <p>© 2019 What to watch Ltd.</p>
    </div>
  </footer>
);
