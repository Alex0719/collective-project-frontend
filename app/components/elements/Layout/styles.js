import styled from 'styled-components';

import { JAPANESE_INDIGO, AERO_BLUE } from 'constants/colors';
import MenuButton from '../MenuButton';

export const OuterWrapper = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px 20px;
  display: flex;
  background-color: ${JAPANESE_INDIGO};
`;

export const AvatarWrapper = styled.div`
  width: fit-content;
  flex: 1;
  text-align: right;
  height: fit-content;
`;

export const AvatarStyle = {
  cursor: 'pointer',
  backgroundColor: AERO_BLUE,
  color: JAPANESE_INDIGO,
};

export const IconButtonStyle = {
  padding: '0px',
};

export const ImgButtonStyle = {
  margin: '0px 2px 0px 0px',
};
