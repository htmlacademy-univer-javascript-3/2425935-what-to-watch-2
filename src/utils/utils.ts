export const getFilmRating = (rating = 0) => {
  if (rating >= 9) {
    return 'Excellent';
  } else if (rating >= 8) {
    return 'Very good';
  } else if (rating >= 7) {
    return 'Good';
  } else if (rating >= 6) {
    return 'Average';
  }
  return 'Below average';
};
