const enum TimeUnit {
  Hours = 'hours',
  Minutes = 'minutes',
  Seconds = 'seconds',
}

export const formatTime = (timeInSeconds: number) => {
  const timeUnits = [
    { unit: TimeUnit.Hours, divisor: 3600 },
    { unit: TimeUnit.Minutes, divisor: 60 },
    { unit: TimeUnit.Seconds, divisor: 1 },
  ];

  const formattedTime = timeUnits
    .map(({ divisor }) => {
      const value = Math.floor(timeInSeconds / divisor);
      timeInSeconds %= divisor;
      return String(value).padStart(2, '0');
    })
    .join(':');

  return formattedTime;
};
