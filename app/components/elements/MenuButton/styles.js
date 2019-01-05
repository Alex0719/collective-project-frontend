import styled from 'styled-components';

import { AERO_BLUE, PEWTER_BLUE, JAPANESE_INDIGO } from 'constants/colors';

export const Button = styled.div`
  color: #f2f2f2;
  font-size: 18px;
  position: relative;
  box-sizing: border-box;
  transition: all 500ms ease;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  text-align: center;
  margin: 10px 0px;
  color: ${AERO_BLUE};

  &:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 0px;
    height: 100%;
    border-radius: 5px;
    background: ${PEWTER_BLUE};
    opacity: 0.3;
    border-radius: 5px;
    transition: all 1s ease;
  }

  &:hover:before {
    width: 100%;
    height: 100%;
  }
`;

export const ActiveButton = Button.extend`
  background-color: ${PEWTER_BLUE};
  border-radius: 5px;
  opacity: 0.2;
  color: ${JAPANESE_INDIGO};
`;
