import React from 'react';
import styled from 'styled-components';
import {
  AERO_BLUE,
  JAPANESE_INDIGO,
  SMOKY_BLACK,
  QUEEN_BLUE,
  PEWTER_BLUE,
} from 'constants/colors';
import ChartWithText from '../elements/ChartWithText/ChartWithText';

const CirclesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px 0;
  flex-wrap: wrap;
  background: ${AERO_BLUE};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid ${PEWTER_BLUE};
`;

const QuestionContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Question = styled.div`
  width: 33%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  h2 {
    color: ${QUEEN_BLUE};
  }
  div {
    color: ${PEWTER_BLUE};
  }

  div,
  h2 {
    display: flex;
    justify-content: center;
  }
  min-width: 260px;
  @media (max-width: 840px) {
    width: 100%;
  }
`;

const Partners = styled.div`
  text-align: center;
`;

const Count = styled.div`
  font-size: 3em;
`;

export default class DashboardComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CirclesContainer>
          <ChartWithText>
            <Count>{this.props.counts.companyCount}</Count>
            <div>Companii</div>
          </ChartWithText>
          <ChartWithText>
            <Count>{this.props.counts.studentCount}</Count>
            <div>Studenti</div>
          </ChartWithText>
          <ChartWithText>
            <Count>{this.props.counts.internshipCount}</Count>
            <div>Internshipuri</div>
          </ChartWithText>
        </CirclesContainer>
        <QuestionContainer>
          <Row>
            <Question>
              <h2>Ce este Internlink</h2>
              <div>platforma idk</div>
            </Question>

            <Question>
              <h2>Cui se adreseaza?</h2>
              <div>Oricui</div>
            </Question>

            <Question>
              <h2>Cui se adreseaza?</h2>
              <div>Oricui</div>
            </Question>
          </Row>

          <Row>
            <Question>
              <h2>Ce este Internlink</h2>
              <div>platforma idk</div>
            </Question>

            <Question>
              <h2>Cui se adreseaza?</h2>
              <div>Oricui</div>
            </Question>

            <Question>
              <h2>Cui se adreseaza?</h2>
              <div>Oricui</div>
            </Question>
          </Row>
        </QuestionContainer>
        <Partners>
          <h1>Firme partenere</h1>
        </Partners>
      </div>
    );
  }
}
