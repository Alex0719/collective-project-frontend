import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Divider } from 'material-ui';
import Tooltip from '@material-ui/core/Tooltip';

import { JAPANESE_INDIGO, AERO_BLUE } from 'constants/colors';
import { DividerStyle } from 'containers/elements/ProfileMenu/styles';

const IndigoButton = styled.div`
  width: 100px;
  border-radius: 5px;
  background-color: ${JAPANESE_INDIGO};
  color: ${AERO_BLUE};
  text-align: center;
`;
const DividerButton = styled.div`
  background-color: ${AERO_BLUE};
  width: 100%;
  height: 100%;
  color: ${JAPANESE_INDIGO};
  text-align: center;
`;
const ButtonWrapper = styled.div`
  width: 100%;
`;
const ArrowDownButton = styled.svg`
  width: 75px;
  height: 65px;
  fill: ${JAPANESE_INDIGO};
  position: absolute;
  &:hover {

    polygon {
      fill:  ${JAPANESE_INDIGO};
      transition: all .2s ease-out;

      &.arrow-bottom {
        transform: translateY(-18px);
      }

      &.arrow-top {
        transform: translateY(18px);
      }
    }
  }
`;

const arrowsStyle = {
  display: 'inline-grid',
  color: JAPANESE_INDIGO,
  position: 'relative',
  marginTop: '-13px',
};

const iconStyle = {
  color: JAPANESE_INDIGO,
  width: '75px',
  height: '35px',
  marginTop: '-13px',
  position: 'absolute',
};

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
    case 'ArrowDownButton':
      return (
        <Tooltip title="Adaugă" style={arrowsStyle}>
          <ArrowDownButton onClick={onClick}>
            <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
            <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
            <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
          </ArrowDownButton>
        </Tooltip>
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
