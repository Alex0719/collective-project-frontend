import React from 'react';
import PropTypes from 'prop-types';
import Title from '../elements/Title';

const HomePage = props => {
  const { text } = props;

  return (
    <div>
      <Title text={text} />
      Happy coding! :)
    </div>
  );
};

HomePage.propTypes = {
  text: PropTypes.string,
};

export default HomePage;
