import { FunctionComponent } from 'react';
import { Review, reviewsData } from '../../../data/reviews-data';

const FilmReview: FunctionComponent<Review> = ({ text, author, date, rating }) => (
  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{text}</p>

      <footer className="review__details">
        <cite className="review__author">{author}</cite>
        <time className="review__date" dateTime={date}>
          {date}
        </time>
      </footer>
    </blockquote>

    <div className="review__rating">{rating}</div>
  </div>
);

export const Reviews: React.FunctionComponent = () => (
  <div className="film-card__reviews film-card__row">
    <div className="film-card__reviews-col">
      {reviewsData.slice(0, reviewsData.length / 2).map((review) => (
        <FilmReview key={review.id} {...review} />
      ))}
    </div>
    <div className="film-card__reviews-col">
      {reviewsData
        .slice(reviewsData.length / 2, reviewsData.length)
        .map((review) => (
          <FilmReview key={review.id} {...review} />
        ))}
    </div>
  </div>
);
