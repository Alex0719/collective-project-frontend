import React from 'react';
import PropTypes from 'prop-types';
import { JAPANESE_INDIGO, AERO_BLUE } from 'constants/colors';
import styled from 'styled-components';

const H2 = styled.h2`
  font: 600 1.5em/1 'Raleway', sans-serif;
  color: ${JAPANESE_INDIGO};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  top: 25%;
  width: 100%;
`;

const Background = styled.div`
  padding-top: 20px;
  background: ${AERO_BLUE};
`;

const Title = props => (
  <Background>
    <H2>{props.text}</H2>
  </Background>
);

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
