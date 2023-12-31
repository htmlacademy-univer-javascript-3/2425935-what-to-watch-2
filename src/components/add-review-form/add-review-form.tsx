import React, { useState, useCallback } from 'react';
import { useAppDispatch } from '../../hooks/store';
import { useNavigate } from 'react-router-dom';
import { addReview } from '../../store/api-actions';

const RATING_LIST = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const MAX_LEN_REVIEW = 400;
const MIN_LEN_REVIEW = 50;
interface Props {
  filmId: string;
}

export const AddReviewForm: React.FC<Props> = ({ filmId }) => {
  const [rating, setRating] = useState('');
  const [reviewText, setReviewText] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRatingChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRating(event.target.value);
    },
    []
  );

  const handleReviewTextChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setReviewText(event.target.value);
    },
    []
  );

  const handleFormSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      dispatch(
        addReview({ filmId: filmId, rating: Number(rating), comment: reviewText })
      ).then(() => {
        navigate(`/films/${filmId}`);
      });
    },
    [dispatch, filmId, navigate, rating, reviewText]
  );

  const isDisabled = !rating || !reviewText || reviewText.length < MIN_LEN_REVIEW || reviewText.length > MAX_LEN_REVIEW;

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {RATING_LIST.map((value) => (
              <React.Fragment key={value}>
                <input
                  className="rating__input"
                  id={`star-${value}`}
                  type="radio"
                  data-testid={`rating-${value}`}
                  name="rating"
                  value={value.toString()}
                  checked={rating === value.toString()}
                  onChange={handleRatingChange}
                />
                <label className="rating__label" htmlFor={`star-${value}`}>
                  Rating {value}
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            data-testid="review-text"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={reviewText}
            onChange={handleReviewTextChange}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={isDisabled}>
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
