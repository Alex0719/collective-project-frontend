import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { JAPANESE_INDIGO } from 'constants/colors';

const TestComponent = props => {
  const { countries } = props;

  const Item = styled.div`
    color: ${JAPANESE_INDIGO};
  `;

  return (
    <div>
      {countries.map(country => (
        <Item key={country.count}>
          {country.name} has {country.count} inhabitants.{' '}
        </Item>
      ))}
    </div>
  );
};

TestComponent.propTypes = {
  countries: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default TestComponent;
