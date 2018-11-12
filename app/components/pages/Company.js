import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SimpleAreaChart from 'components/elements/AreaChart';
import { AERO_BLUE, JAPANESE_INDIGO } from 'constants/colors';
import Title from 'components/elements/Title';

const CompanyComponent = props => {
  return (
    <Graphs>
    <StudentsPerYear>
      <Title text="Aplicanti in ultimii ani" />
      <SimpleAreaChart />
    </StudentsPerYear>
    </Graphs>
  );
}

export const Graphs = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${AERO_BLUE};
  color: ${JAPANESE_INDIGO};
`;

const StudentsPerYear = styled.div`
  flex: 1;
  align-self: center;
`;

export default CompanyComponent;
