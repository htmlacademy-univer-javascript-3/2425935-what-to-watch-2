import { FunctionComponent } from 'react';

interface Props {
  view?: 'display'| 'container';
}

export const Spinner: FunctionComponent<Props> = ({ view = 'container' }) => (
  <div data-testid="spinner" className={`spinner-${view}`}>
    <div className="spinner" />
  </div>
);
