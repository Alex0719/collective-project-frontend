import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Divider } from 'material-ui';

import { JAPANESE_INDIGO, AERO_BLUE } from 'constants/colors';
import { DividerStyle } from 'containers/elements/ProfileMenu/styles';

const IndigoButton = styled.div`
  width: 100px;
  border-radius: 5px;
  background-color: ${JAPANESE_INDIGO};
  color: ${AERO_BLUE};
  text-align: center;
  margin:5px;
  cursor:pointer;
`;
const DividerButton = styled.div`
  background-color: ${AERO_BLUE};
  width: 100%;
  height: 100%;
  color: ${JAPANESE_INDIGO};
  text-align: center;
  margin:5px;
  cursor:pointer;
`;
const ButtonWrapper = styled.div`
  width: 100%;
`;

const renderButton = (text, onClick, type) => {
  switch (type) {
    case 'IndigoButton':
      return <IndigoButton onClick={onClick}>{text}</IndigoButton>;
    case 'DividerButton':
      return (
        <ButtonWrapper>
          <Divider style={DividerStyle} />
          <DividerButton onClick={onClick}>{text}</DividerButton>
          <Divider style={DividerStyle} />
        </ButtonWrapper>
      );
    default:
      return <IndigoButton onClick={onClick}>{text}</IndigoButton>;
  }
};

const Button = ({ text, onClick, type }) => (
  <div>{renderButton(text, onClick, type)}</div>
);

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Button;
