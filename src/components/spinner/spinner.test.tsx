import { render, screen } from '@testing-library/react';
import { Spinner } from './spinner';

describe('Spinner Component', () => {
  it('should render the spinner', () => {
    render(<Spinner />);

    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('spinner-container');
  });

  it('should render the spinner with the full display', () => {
    render(<Spinner view='display' />);

    const spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('spinner-display');
  });
});
