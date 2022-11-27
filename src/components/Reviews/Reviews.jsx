import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReview } from 'api/fetchApi';
import { List, ListItem, Author, AuthorName } from './Reviews.styled';

export const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (movieId) {
      getReview(Number(movieId))
        .then(data => setReviews(data.results))
        // .then(data => console.log(data))
        .catch(error => console.log(error.message));
    }
  }, [movieId]);

  return (
    <List>
      {(reviews.length !== 0 &&
        reviews.map(({ author, content }) => (
          <ListItem key={author}>
            <AuthorName>
              <Author>Author:</Author> {author}
            </AuthorName>
            <p>{content}</p>
          </ListItem>
        ))) ||
        'There is any review for this movie'}
    </List>
  );
};
