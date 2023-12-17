import { render } from '@testing-library/react';
import { Button } from './button';

describe('Button Component', () => {
  it('should render a button with class custom-button', () => {
    const { container } = render(<Button className="custom-button" />);
    const button = container.querySelector('button.custom-button');
    expect(button).toBeInTheDocument();
  });

  it('should render a button with the label "Click Me"', () => {
    const { getByText } = render(<Button label="Click Me" />);
    const button = getByText('Click Me');
    expect(button).toBeInTheDocument();
  });
});
