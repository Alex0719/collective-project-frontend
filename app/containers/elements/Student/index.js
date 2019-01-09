import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import Button from 'components/elements/Button';
import TextFieldComponent from '../../../components/elements/TextField/index';
import { FieldsWrapper } from '../../../components/elements/Button/styles';
import { DivComponent } from '../../../components/elements/Div/styles';
import { updateStudentRequest } from '../../../actions/updateStudentActions';
import { getStudentRequest } from '../../../actions/getStudentActions';

import {
  getStudentSaga,
  updateStudentSaga,
} from '../../../sagas/studentsSagas';
import { selectUpdateStudent } from '../../../selectors/studentSelector';
// const renderPdf=(cv, id)=>{
//     return(<ReactPDF id="pdfStudent" file={"data: application/pdf;base64," + cv}/>);
// }

export class Student extends React.Component {
  constructor(props) {
    super(props);
    this.props.getStudent();
    this.state =
      // { ...props.student };
      {
        id: '',
        firstname: '',
        lastname: '',
        university: '',
        specialization: '',
        college: '',
        year: '',
      };
  }

  componentDidUpdate(prevProps) {
    const {
      id = '',
      firstname = '',
      lastname = '',
      university = '',
      specialization = '',
      college = '',
      year = '',
    } = this.props.student;
    if (
      prevProps.student.id !== id ||
      prevProps.student.lastname !== lastname ||
      prevProps.student.firstname !== firstname ||
      prevProps.student.university !== university ||
      prevProps.student.specialization !== specialization ||
      prevProps.student.college !== college ||
      prevProps.student.year !== year
    )
      this.setState({
        id,
        firstname,
        lastname,
        university,
        specialization,
        college,
        year,
      });
  }

  updateStudent() {
    console.log('willUpdate', this.state.firstName, this.state.lastName);
    this.props.updateStudent(this.state);
    // let pdf = document.getElementById('pdfStudent').
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.id !== nextState.id ||
      this.state.lastname !== nextState.lastname ||
      this.state.firstname !== nextState.firstname ||
      this.state.university !== nextState.university ||
      this.state.college !== nextState.college ||
      this.state.specialization !== nextState.specialization ||
      this.state.year !== nextState.year ||
      this.props.student.id !== nextProps.student.id ||
      this.props.student.lastname !== nextProps.student.lastname ||
      this.props.student.firstname !== nextProps.student.firstname ||
      this.props.student.university !== nextProps.student.university ||
      this.props.student.college !== nextProps.student.college ||
      this.props.student.specialization !== nextProps.student.specialization ||
      this.props.student.year !== nextProps.student.year;
  }

  onChange(field, event) {
    console.log(field, event.target.value);
    this.setState({
      [field]: event.target.value,
    });
  }

  render() {
    const style = { width: 200 };
    const {
      id = '',
      firstname = '',
      lastname = '',
      university = '',
      specialization = '',
      college = '',
      year = '',
    } = this.state;

    // this.setState({ id, firstname, lastname, university, specialization, college, year });

    console.log('location', this.props.location.search, this.state);
    // console.log("in component ",id,student);
    return (
      <DivComponent>
      <FieldsWrapper>
        <br />
        <TextFieldComponent
          label="Id"
          value={id}
          style={style}
          onChange={event => this.onChange('id', event)}
        />
        <TextFieldComponent
          label="First Name"
          id="studentFirstName"
          value={firstname}
          onChange={event => this.onChange('firstname', event)}
        />
        <TextFieldComponent
          label="Last Name"
          id="studentLastName"
          value={lastname}
          onChange={event => this.onChange('lastname', event)}
        />
        <TextFieldComponent
          label="University"
          id="university"
          value={university}
          onChange={event => this.onChange('university', event)}
        />
        <TextFieldComponent
          label="Specialization"
          id="specialization"
          value={specialization}
          onChange={event => this.onChange('specialization', event)}
        />
        <TextFieldComponent
          label="College"
          id="college"
          value={college}
          onChange={event => this.onChange('college', event)}
        />
        <TextFieldComponent
          label="Year"
          id="year"
          value={year}
          onChange={event => this.onChange('year', event)}
        />
        <Button
          type="IndigoButton"
          id="btnUpdate"
          text="Update your profile"
          onClick={() => {
            this.updateStudent();
          }}
        />
      </FieldsWrapper>
      </DivComponent>
    );
  }
}

Student.propTypes = {
  student: PropTypes.object,
  id: PropTypes.string,
  firstName: PropTypes.string,
  getStudent: PropTypes.func.isRequired,
  updateStudent: PropTypes.func.isRequired,
};

const mapStateToProps = state =>
  createStructuredSelector({
    student: selectUpdateStudent(state)(),
  });

const mapDispatchToProps = dispatch => ({
  updateStudent: values => dispatch(updateStudentRequest(values)),
  getStudent: () => dispatch(getStudentRequest()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

// {/*{renderPdf(cv, id)}*/}
const withSaga = injectSaga({
  key: 'updateStudentSaga',
  saga: updateStudentSaga,
});

const withGetStudentSaga = injectSaga({
  key: 'getStudentSaga',
  saga: getStudentSaga,
});

export default compose(
  withSaga,
  withGetStudentSaga,
  withConnect,
)(Student);
