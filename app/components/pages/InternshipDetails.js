import React from 'react';
import styled from 'styled-components';
import {
  AERO_BLUE,
  JAPANESE_INDIGO,
  SMOKY_BLACK,
  QUEEN_BLUE,
  PEWTER_BLUE,
} from 'constants/colors';

import TextField from '../elements/TextField';
import TextArea from '../elements/TextArea';

export default class InternshipDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LeftPart>
          <Row>
            <TextField value={this.props.internshipDetails.internship.topics} />
            <TextField value={this.props.internshipDetails.internship.start} />
            <TextField value={this.props.internshipDetails.internship.places} />
          </Row>
          <Row>
            <TextArea value={this.props.internshipDetails.internship.topics} />
          </Row>
          <Row>
            <TextField value={this.props.internshipDetails.internship.topics} />
          </Row>
        </LeftPart>
      </div>
    );
  }
}

const LeftPart = styled.div`
  width: 60%;
  display: block;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid ${PEWTER_BLUE};
`;
