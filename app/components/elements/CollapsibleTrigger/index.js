import React from 'react';
import { JAPANESE_INDIGO, AERO_BLUE, QUEEN_BLUE } from 'constants/colors';
import styled from 'styled-components';
import moment from 'moment';

const CollapsibleTrigger = props => {
    if(moment(props.end) < moment()){
      return (
        <Trigger>
          {`${props.description} | ${props.start} --- ${props.end}`}
          <Status available={false}>INCHEIAT</Status>
        </Trigger>
      );
    } else {
      return (
      <Trigger >
        {`${props.description} | ${props.start} --- ${props.end}`}
        <Status available={true}>DISPONIBIL</Status>
      </Trigger>
    );
    }

};


const Trigger = styled.span`
  display: inline-block;
  width: 100%;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  padding: 10px,
  background: ${QUEEN_BLUE},
  color: ${AERO_BLUE},
  cursor: pointer,
`;

const Status = styled.div`
  display: inline-block;
  color: ${props => props.available ? 'lightgreen' : 'red' };
  float: right;
`;

export default CollapsibleTrigger;
