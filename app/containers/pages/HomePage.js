import React from 'react';

import HomePageComponent from 'components/pages/HomePage';

// eslint-disable-next-line react/prefer-stateless-function
export class HomePage extends React.Component {
  render() {
    return (
      <HomePageComponent text="Welcome to our magnificent Internship App" />
    );
  }
}

export default HomePage;
