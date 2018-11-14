import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { JAPANESE_INDIGO, AERO_BLUE } from 'constants/colors';

export const ButtonDiv = styled.div`
  width: 80px;
  border-radius: 5px;
  background-color: ${JAPANESE_INDIGO};
  color: ${AERO_BLUE};
  text-align: center;
`;

const Button = ({ text, onClick }) => (
  <ButtonDiv onClick={onClick}>{text}</ButtonDiv>
);

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
