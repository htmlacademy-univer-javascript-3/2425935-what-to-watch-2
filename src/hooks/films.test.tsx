import { formatTime } from './films';

describe('formatTime', () => {
  it('should format time correctly', () => {
    expect(formatTime(3666)).toBe('01:01:06');
    expect(formatTime(126)).toBe('00:02:06');
    expect(formatTime(59)).toBe('00:00:59');
  });
});
