import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SimpleAreaChart from 'components/elements/AreaChart';
import TwoLevelPieChart from 'components/elements/PieChart';
import StarRating from 'components/elements/StarRating';
import { AERO_BLUE, JAPANESE_INDIGO } from 'constants/colors';
import Title from 'components/elements/Title';

const CompanyComponent = props => (
  <Graphs>
    <AplicantsVSAccepted>
      <Title text="Aplicanti VS acceptati" />
      <TwoLevelPieChart />
    </AplicantsVSAccepted>
    <Rating>
      <Title text="Rating" />
      <RowsWithRatings>
        <RowRating>
          <NameRating>Companie</NameRating>
          <Stars>
            <StarRating rating={4.5} />
          </Stars>
        </RowRating>
        <RowRating>
          <NameRating>Mentori</NameRating>
          <Stars>
            <StarRating rating={3.2} />
          </Stars>
        </RowRating>
        <RowRating>
          <NameRating>Internship</NameRating>
          <Stars>
            <StarRating rating={4.8} />
          </Stars>
        </RowRating>
      </RowsWithRatings>
    </Rating>
    <StudentsPerYear>
      <Title text="Aplicanti in ultimii ani" />
      <SimpleAreaChart />
    </StudentsPerYear>
  </Graphs>
);

export const Graphs = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${AERO_BLUE};
  color: ${JAPANESE_INDIGO};
`;

const RowsWithRatings = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 140px;
  margin-left: 10px;
`;

const RowRating = styled.div`
  flex: 1 0 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const NameRating = styled.div`
  font-size: 20px;
  color: ${JAPANESE_INDIGO};
  flex: 1 0 30%;
`;

const Stars = styled.div`
  flex: 1 0 70%;
`;

const Rating = styled.div`
  flex: 1 0 50%;
`;

const StudentsPerYear = styled.div`
  flex: 1 0 100%;
`;

const AplicantsVSAccepted = styled.div`
  flex: 1 0 50%;
  align-self: center;
`;

export default CompanyComponent;
