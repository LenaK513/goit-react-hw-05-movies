import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReview } from 'api/fetchApi';

export const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (movieId) {
      getReview(movieId)
        .then(data => setReviews(data.results))
        // .then(data => console.log(data))
        .catch(error => console.log(error.message));
    }
  }, [movieId]);

  return (
    <ul>
      {(reviews.length !== 0 &&
        reviews.map(({ author, content }) => (
          <li key={author}>
            <p>
              <span>Author:</span> {author}
            </p>
            <p>{content}</p>
          </li>
        ))) ||
        'There is any review for this movie'}
    </ul>
  );
};
