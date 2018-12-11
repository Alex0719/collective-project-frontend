import React from 'react';
import PieChart from 'react-minimal-pie-chart';
import styled from 'styled-components';
import { JAPANESE_INDIGO, QUEEN_BLUE } from '../../../constants/colors';

const ChartContainer = styled.div`
  margin: 20px;
  margin-top: -80px;
  margin-bottom: 20px;
  color: ${QUEEN_BLUE};
  font-size: 20px;
  font-weight: bold;
  min-width: 250px;
  max-width: 300px;
`;


const ChartText = styled.div`
  position: relative;
  display: flex;
  top: 50%;
  height: 100px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  div {
    margin: 5px;
  }
`;

const ChartWithText = props => (
  <ChartContainer>
   
    <ChartText>{props.children}</ChartText>
   
    <PieChart
      data={[{ value: 1, key: 1, color: JAPANESE_INDIGO }]}
      reveal={100}
      lineWidth={15}
      animate
      animationDuration={1500}
    />
  </ChartContainer>
);

export default ChartWithText;
