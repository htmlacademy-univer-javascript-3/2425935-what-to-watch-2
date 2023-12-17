import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { ScrollToTop } from './scroll-to-top';

describe('ScrollToTop Component', () => {
  it('should scroll to the top when location changes', () => {
    const { unmount } = render(
      <MemoryRouter initialEntries={['/home']}>
        <ScrollToTop />
      </MemoryRouter>
    );

    act(() => {
      global.history.pushState({}, 'About', '/about');
    });

    expect(window.scrollY).toBe(0);

    unmount();
  });
});
