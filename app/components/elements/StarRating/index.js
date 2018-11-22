import React from 'react';
import StarRatings from 'react-star-ratings';

class StarRating extends React.Component {
  render() {
    const { rating } = this.props;

    return (
      <StarRatings
        rating={rating}
        starDimension="40px"
        numberOfStars={5}
        starRatedColor="orange"
        name='rating'
      />
    );
  }
}
export default StarRating;
