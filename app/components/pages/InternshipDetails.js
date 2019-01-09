import React from 'react';
import styled from 'styled-components';
import { Label } from 'semantic-ui-react';
import {
  AERO_BLUE,
  JAPANESE_INDIGO,
  SMOKY_BLACK,
  QUEEN_BLUE,
  PEWTER_BLUE,
} from 'constants/colors';

import 'components/pages/internshipDetails.css'

import TextField from '../elements/TextField';
import TextArea from '../elements/TextArea';
import SplitPane from 'react-split-pane';

import StarRating from 'components/elements/StarRating';
import Button from 'components/elements/Button';
import UsefulLinks from '../elements/UsefulLinks';
import Testimonials from '../elements/Testimonials';
import InternshipPosts from '../../containers/elements/InternshipPosts';

export default class InternshipDetailsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      places: 0,
      topics: '',
      description: '',
      internshipDetails: this.props.internshipDetails,
      id:0,
    };
  }

  componentDidMount(){
    this.setState({id:1})
  }

  onPlacesChanged(txt) {
    const newInternshipDetails = this.state.internshipDetails;
    newInternshipDetails.internship.places = txt.target.value;
    this.setState({ internshipDetails: newInternshipDetails });
  }

  onTopicsChanged(txt) {
    const newInternshipDetails = this.state.internshipDetails;
    newInternshipDetails.internship.topics = txt.target.value;
    this.setState({ internshipDetails: newInternshipDetails });
  }

  onDescriptionChanged(txt) {
    console.log('aici');
    console.log(txt);
    const newInternshipDetails = this.state.internshipDetails;
    newInternshipDetails.internship.description = txt.target.value;
    this.setState({ internshipDetails: newInternshipDetails });
  }

  render() {
    const buttonStyle = {
      position: 'absolute',
      right: '0',
      'margin-right': '10px',
      'margin-top': '10px',
    };

    const TextFieldStyle = {
      padding: '15px',
      marginRight: '10px',
      marginLeft: '10px',
      fontWeight: 'normal',
      width: '100%',
    };

    const TextFieldSmallStyle = {
      padding: '15px',
      marginRight: '10px',
      marginLeft: '10px',
      fontWeight: 'normal',
      width: '34%',
    };

    const TextAreaStyle = {
      marginRight: '10px',
      marginLeft: '10px',
      paddingLeft: '15px',      
      width: '100%',
      fontWeight: 'normal',
    };

    const LabelStyle = {
      fontWeight: 'bold',
      width: '100%',
    };

    const LabelSmallStyle = {
      fontWeight: 'bold',
      width: '48%',
    };

    const splitPane={
      marginLeft: '100px',
      marginRight: '100px',
      position:'relative',
      overflow:'auto',
    };

    console.log('comp:');
    console.log(this.state.internshipDetails);
    return (
      <SplitPane
      style={splitPane}
        split="vertical"
        minSize={(window.innerWidth * 34) / 100}
        defaultSize="66%"
        maxSize={(window.innerWidth * 66) / 100}
      >
        <LeftPart>
          <Rows>
          <Row>
            <TextField value={this.state.internshipDetails.internship.name} />
          </Row>
          <Row>
            <Label style={LabelSmallStyle} horizontal>
              Data de incepere:
              <TextField
                style={TextFieldSmallStyle}
                value={this.state.internshipDetails.internship.start}
              />
            </Label>
            <Label style={LabelSmallStyle} color="red" horizontal>
              Locuri disponibile:
              <TextField
                style={TextFieldSmallStyle}
                value={this.state.internshipDetails.internship.places}
                onChange={event => this.onPlacesChanged(event)}
              />
            </Label>
          </Row>
          <Row>
            <Label style={LabelStyle} color="red" horizontal>
              Topicuri:
              <TextField
                style={TextFieldStyle}
                value={this.state.internshipDetails.internship.topics}
                onChange={event => this.onTopicsChanged(event)}
              />
            </Label>
          </Row>
          <Row>
          <Label style={LabelStyle} color="red" horizontal>
              Descriere:
            <TextField
              style={TextAreaStyle}
              value={this.state.internshipDetails.internship.description}
              onChange={event => this.onDescriptionChanged(event)}
              multiLine
            />
            </Label>
          </Row>
          <RowButton>
            {/* TODO: put data when calling onSaveChanges() */}
            <Button
              text="Save changes"
              onClick={() =>
                this.props.onSaveChanges(
                  this.state.internshipDetails.internship,
                )
              }
            />
          </RowButton>
          </Rows>
          <InternshipPosts />
        </LeftPart>

        <RightPart>
          <RowsWithRatings>
            <RowRating>
              <NameRating>Internship</NameRating>
              <StarRating
                rating={this.props.internshipDetails.ratingInternship}
              />
            </RowRating>
            <RowRating>
              <NameRating>Mentors</NameRating>
              <StarRating rating={this.props.internshipDetails.ratingMentors} />
            </RowRating>
            <RowRating>
              <NameRating>Company</NameRating>
              <StarRating rating={this.props.internshipDetails.ratingCompany} />
            </RowRating>
          </RowsWithRatings>
          <LinkRows>
            <Label style={LabelStyle} color="red" horizontal>
              Link-uri Utile:
              <Link href="/management">Aplicanti</Link>
            </Label>
          </LinkRows>
          <TestimonialRow>
            <Testimonials testimonials={this.props.testimonials} />
          </TestimonialRow>
        </RightPart>
      </SplitPane>
    );
  }
}

const NameRating = styled.div`
  font-size: 20px;
  color: ${JAPANESE_INDIGO};
  flex: 1 0 30%;
`;


const RowsWithRatings = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
`;

const Rows = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 11px;
`;

const LinkRows = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 11px;
  margin-top: 25px;
`;

const RowRating = styled.div`
  flex: 1 0 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const LeftPart = styled.div`
  width: 95%;
  display: block;
  padding: 20px;
  justify-content: center;
`;

const RightPart = styled.div`
  width: 100%;
  display: block;
  padding: 20px;
  margin-top: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const TestimonialRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 75px;
  border-bottom: 1px solid ${PEWTER_BLUE};
  background-color: ${AERO_BLUE};
`;

const RowButton = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: right;
  margin-top: 25px;
`;

const TitleWrapper = styled.div`
  text-align: center;
  font-size: 20px;
  color: ${JAPANESE_INDIGO};
`;

const Link = styled.a`
  &:hover{
    text-decoration: underline;
    color: ${JAPANESE_INDIGO};
  }
  margin: auto;
  width: 50%;
  white-space:nowrap;
  text-decoration: none;
  display:block;
`;