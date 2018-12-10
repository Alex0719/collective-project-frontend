import styled from 'styled-components';

import { JAPANESE_INDIGO } from 'constants/colors';

export const IconButtonStyle = {
  padding: '0px',
};

export const TextFieldStyle = {
  padding: '15px',
  marginRight: '10px',
};

export const TableContainer = styled.div`
    width: 75%;  
    margin: 0 auto;
    margin-top:10px;
`;

export const TitleWrapper = styled.div`
  text-align: center;
  color: JAPANESE_INDIGO;
`;

export const DividerStyle = {
  backgroundColor: JAPANESE_INDIGO,
};

export const ButtonWrapper = styled.div`
  margin: auto;
  width: 40%;
  padding: 10px;
`;

export const Link = styled.a`
  &:hover{
    text-decoration: underline;
    color: ${JAPANESE_INDIGO};
  }
  margin: auto;
  width: 50%;
  white-space:nowrap;
  text-decoration: none;
`;
