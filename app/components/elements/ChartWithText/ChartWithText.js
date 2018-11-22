import React from 'react';
import PieChart from 'react-minimal-pie-chart';
import styled from 'styled-components';
import { JAPANESE_INDIGO } from '../../../constants/colors';

const ChartContainer = styled.div`
  margin: 20px;
  margin-top: -80px;
  margin-bottom: 20px;
  color: ${JAPANESE_INDIGO};
  font-size: 20px;
  font-weight: bold;
  min-width: 250px;
`;

const ChartText = styled.div`
  position: relative;
  top: 50%;
  display: flex;
  justify-content: center;
  div {
    margin: 5px;
    display: flex;
    align-items: center;
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
      animationDuration={1000}
    />
  </ChartContainer>
);

export default ChartWithText;
