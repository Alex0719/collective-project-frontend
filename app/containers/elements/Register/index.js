import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { push } from 'react-router-redux';
import Dropzone from 'react-dropzone';
import { JAPANESE_INDIGO } from 'constants/colors';
import Alert from 'react-s-alert';

import Button from 'components/elements/Button';
import TextFieldComponent from '../../../components/elements/TextField/index';
import { FieldsWrapper } from '../../../components/elements/Button/styles';
import { DivComponent, Wrapper } from '../../../components/elements/Div/styles';
import { registerRequest } from '../../../actions/registerActions';
import {
  registerStudentSaga
} from '../../../sagas/studentsSagas';

export class Register extends React.Component {
  constructor(props) {
    super(props);
   
    this.state =
      {
        firstname:"",
        lastname: "",
        university: "",
        specialization: "",
        college: "",
        year: "",
        email:"",
        password:"",
        confirmPassword:"",
        cv:null,
        formData: new FormData(),
      };
  }

  showAlert(message, error)
  {
      if(error)
      {
        Alert.error(message, {
          position: 'top-right',
          effect: 'jelly'
        });
      }
      else
      {
        Alert.success(message, {
          position: 'top-right',
          effect: 'jelly'
        });
      }
  }


  onFileDrop(event) {
    const file = event[0];
    var form=this.state.formData;
    this.setState({cv:file})
    form.append("Cv", file);
    this.setState({formData:form});
  }

  onChange(field, event) {
    var form=this.state.formData;
    if(form.get([field]))
    {
        form.set([field], event.target.value);
    }
    else 
    { 
       form.append([field], event.target.value);
    }

    this.setState({
      [field]: event.target.value,
      formData:form
    });
  }

  onRegister()
  {
      if(this.state.password=="" || this.state.confirmPassword=="" || this.state.email=="" || this.state.firstname=="" || this.state.lastname=="" || this.state.university=="")
      {
          this.showAlert("Campurile notate cu * sunt obligatorii", true);
          return;
      }

      if(this.state.cv==null)
      {
          this.showAlert("Incarca un CV pentru a putea fi selectat de catre companii",true);
          return;
      }

      var regex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.])(?=.{8,})";
      if(this.state.password!=null && !this.state.password.match(regex))
      {
        this.showAlert("Parola trebuie sa contina cel putin 8 caractere, printre care o litera, o cifra si un caracter special", true);
        return;
      }

      if(this.state.password!=this.state.confirmPassword)
      {
        this.showAlert("Parola nu a fost confirmata",true);
        return;
      }

      this.props.register(this.state.formData);
  }

  render() {
    const style = { width: 400 };
    const {
      firstname,
      lastname,
      university,
      specialization,
      college,
      year,
      email,
      password,
      confirmPassword
    } = this.state;

    return (
      <Wrapper>
      <DivComponent margin>
        <FieldsWrapper>
          <TextFieldComponent
            label="* Prenume"
            id="studentFirstName"
            value={firstname}
            style={style}
            onChange={event => this.onChange('firstname', event)}
          />
          <TextFieldComponent
            label="* Nume"
            id="studentLastName"
            value={lastname}
            style={style}
            onChange={event => this.onChange('lastname', event)}
          />
          <TextFieldComponent
            label="* Universitate"
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
           <TextFieldComponent
            label="* E-mail"
            id="email"
            value={email}
            style={style}
            onChange={event => this.onChange('email', event)}
          />
           <TextFieldComponent
            label="* Parola"
            id="password"
            type="password"
            value={password}
            style={style}
            onChange={event => this.onChange('password', event)}
          />
           <TextFieldComponent
            label="* Confirma parola"
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            style={style}
            onChange={event => this.onChange('confirmPassword', event)}
          />
            <Dropzone
                multiple={false}
                accept=".pdf"
                style={{width:"100%",
                height: 100,
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                fontSize: '20px',
                color: JAPANESE_INDIGO,
                width: 'fit-content',
                borderWidth: 2,
                borderColor: 'gray',
                borderStyle: 'dashed',
                display: 'flex',
                alignItems: 'center',
                borderRadius: 5}}
                onDrop={event => this.onFileDrop(event)}
                value={this.image}>
                * Pune un CV sau dă click pentru a selecta un fișier. (.pdf)
            </Dropzone>

          <Button
            type="IndigoButton"
            id="btnUpdate"
            text="Inregistreaza cont"
            onClick={() => {
              this.onRegister();
            }}
          />

        </FieldsWrapper>
      </DivComponent>
      </Wrapper>
    );
  }
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  register: values => dispatch(registerRequest(values)),
});

const withConnect = connect(
    null,
  mapDispatchToProps,
);


const withRegisterSaga = injectSaga({
  key: 'registerStudentSaga',
  saga: registerStudentSaga,
});

export default compose(
  withRegisterSaga, 
  withConnect,
)(Register);
