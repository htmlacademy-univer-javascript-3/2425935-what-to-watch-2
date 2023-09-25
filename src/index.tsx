import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const promoProps = {
  promoName: 'The Grand Budapest Hotel',
  promoGenre: 'Drama',
  promoDate: '2014'
};

root.render(
  <React.StrictMode>
    <App
      promoName={promoProps.promoName}
      promoGenre={promoProps.promoGenre}
      promoDate={promoProps.promoDate}
    />
  </React.StrictMode>
);
