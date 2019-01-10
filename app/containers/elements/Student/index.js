import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { push } from 'react-router-redux';

import Button from 'components/elements/Button';
import TextFieldComponent from '../../../components/elements/TextField/index';
import { FieldsWrapper } from '../../../components/elements/Button/styles';
import { DivComponent, Wrapper } from '../../../components/elements/Div/styles';
import { updateStudentRequest } from '../../../actions/updateStudentActions';
import { getStudentRequest, getStudentCvRequest } from '../../../actions/getStudentActions';
import {
  getStudentSaga,
  updateStudentSaga,
  getStudentCvSaga,
} from '../../../sagas/studentsSagas';
import { selectLoggedUser } from 'selectors/profileMenuSelector';
import getRoleSaga from 'sagas/roleSagas';
import { requestRole } from 'actions/roleActions';
import { selectUpdateStudent } from '../../../selectors/studentSelector';
// const renderPdf=(cv, id)=>{
//     return(<ReactPDF id="pdfStudent" file={"data: application/pdf;base64," + cv}/>);
// }

export class Student extends React.Component {
  constructor(props) {
    super(props);
    this.props.getStudent();
    this.state =
      {
        id: props.student.id,
        firstname: props.student.firstname,
        lastname: props.student.lastname,
        university: props.student.university,
        specialization: props.student.specialization,
        college: props.student.college,
        year: props.student.year,
      };
  }

  componentWillMount() {
    this.props.fetchRole();
  }
  
  onClickCv() {
      var fullname=this.state.firstname+" "+this.state.lastname;
      this.props.getStudentCv(fullname);
  }

  componentWillUpdate(nextProps) {
    if(
      nextProps.loggedUser.role !== this.props.loggedUser.role &&
      nextProps.loggedUser.role === 'Company'
    ) {
      this.props.redirect();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      id,
      firstname,
      lastname,
      university,
      specialization,
      college,
      year,
    } = this.props.student;

    if (
      prevProps.student.id !== id ||
      prevProps.student.lastname !== lastname ||
      prevProps.student.firstname !== firstname ||
      prevProps.student.university !== university ||
      prevProps.student.specialization !== specialization ||
      prevProps.student.college !== college ||
      prevProps.student.year !== year
    ) {
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
  }

  updateStudent() {
    this.props.updateStudent(this.state);
    // let pdf = document.getElementById('pdfStudent').
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.id !== nextState.id  ||
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
    this.setState({
      [field]: event.target.value,
    });
  }

  render() {
    const style = { width: 400 };
    const {
      id,
      firstname,
      lastname,
      university,
      specialization,
      college,
      year,
    } = this.state;


    return (
      <Wrapper>
      <DivComponent>
        <FieldsWrapper>
          <TextFieldComponent
            label="Prenume"
            id="studentFirstName"
            value={firstname}
            style={style}
            onChange={event => this.onChange('firstname', event)}
          />
          <TextFieldComponent
            label="Nume"
            id="studentLastName"
            value={lastname}
            style={style}
            onChange={event => this.onChange('lastname', event)}
          />
          <TextFieldComponent
            label="Universitate"
            id="university"
            value={university}
            style={style}
            onChange={event => this.onChange('university', event)}
          />
          <TextFieldComponent
            label="Specializare"
            id="specialization"
            value={specialization}
            style={style}
            onChange={event => this.onChange('specialization', event)}
          />
          <TextFieldComponent
            label="Facultate"
            id="college"
            value={college}
            style={style}
            onChange={event => this.onChange('college', event)}
          />
          <TextFieldComponent
            label="An studiu"
            id="year"
            value={year}
            style={style}
            onChange={event => this.onChange('year', event)}
          />
           <Button
            type="IndigoButton"
            id="btnCv"
            text="Vezi CV"
            onClick={() => {
              this.onClickCv();
            }}
          />
          <Button
            type="IndigoButton"
            id="btnUpdate"
            text="Modifică profilul"
            onClick={() => {
              this.updateStudent();
            }}
          />
         
        </FieldsWrapper>
      </DivComponent>
      </Wrapper>
    );
  }
}

Student.propTypes = {
  student: PropTypes.object,
  id: PropTypes.string,
  firstName: PropTypes.string,
  getStudent: PropTypes.func.isRequired,
  updateStudent: PropTypes.func.isRequired,
  loggedUser: PropTypes.object,
  fetchRole: PropTypes.func,
  redirect: PropTypes.func.isRequired,
  getStudentCv: PropTypes.func.isRequired,
};

const mapStateToProps = state =>
  createStructuredSelector({
    student: selectUpdateStudent(state)(),
    loggedUser: selectLoggedUser(state)(),
  });

const mapDispatchToProps = dispatch => ({
  updateStudent: values => dispatch(updateStudentRequest(values)),
  getStudent: () => dispatch(getStudentRequest()),
  fetchRole: () => dispatch(requestRole()),
  redirect: () => dispatch(push('/unauthorized')),
  getStudentCv: (params) => dispatch(getStudentCvRequest(params)),
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

const withRoleSaga = injectSaga({
    key: 'roleSaga',
    saga: getRoleSaga,
    });

const withGetStudentSaga = injectSaga({
  key: 'getStudentSaga',
  saga: getStudentSaga,
});

const withGetStudentCvSaga = injectSaga({
  key: 'getStudentCvSaga',
  saga: getStudentCvSaga,
});
export default compose(
  withSaga,
  withGetStudentSaga,
  withGetStudentCvSaga,
  withRoleSaga,
  withConnect,
)(Student);
