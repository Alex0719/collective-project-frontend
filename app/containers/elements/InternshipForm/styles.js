import styled from 'styled-components';
import { Collapse } from '@material-ui/core';
import { AERO_BLUE } from 'constants/colors';

export const FormWrapper = styled.div`
  margin:0 auto;
  clear:left;
  height:auto;
  z-index: 0;
  text-align:center;
  background: ${AERO_BLUE};
  padding-top: 14px;
`;

export const CollapseWrapper = styled(Collapse)`
  margin-top: 14px;
`;

export const ButtonWrapper = styled.div`
  margin: auto;
  width: 0;
  padding-left: 80px;
  margin-bottom: 25px;
`;

export const FieldsWrapper = styled.div`
  display: inline-grid;
`;
