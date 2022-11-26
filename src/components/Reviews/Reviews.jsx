import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReview } from 'api/fetchApi';

export const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    getReview(movieId)
      .then(data => setReviews(data))
      .then(data => console.log(data))
      .catch(error => console.log(error.message));
  }, [movieId]);

  return (
    <div>
      <ul>
        {/* {reviews &&
          reviews.map(({ author, content }) => {
            <li key={author}>
              <p>{content}</p>
            </li>;
          })} */}
      </ul>
      <Outlet />
    </div>
  );
};
