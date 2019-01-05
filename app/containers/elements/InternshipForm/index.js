import React from 'react';
import { DatePicker } from 'material-ui';
import { connect } from 'react-redux';
import { compose } from 'redux';

import TextField from 'components/elements/TextField';
import { TextFieldStyle } from 'containers/elements/ProfileMenu/styles';
import { ButtonWrapper, FieldsWrapper } from 'containers/elements/InternshipForm/styles';
import Button from 'components/elements/Button';
import { FormWrapper, CollapseWrapper } from './styles';
import injectSaga from 'utils/injectSaga';
import { addInternship } from 'actions/companyActions';
import { addInternshipSaga } from 'sagas/companySagas';

export class InternshipForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      name: '',
      description: '',
      topics: '',
      places: 0,
      start: null,
      end: null,
    };

    this.onSetStartDate = this.onSetStartDate.bind(this);
    this.onSetEndDate = this.onSetEndDate.bind(this);
  }

  toggleDrawer() {
    this.setState({
      open: !this.state.open,
    });
  }

  weeksBetween(d1, d2) {
    return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
  }

  addInternship() {
    const { addInternship } = this.props;
    const { name, description, topics, places, start, end } = this.state;
    const values = {
      name,
      description,
      topics,
      places,
      start,
      end,
      weeks: this.weeksBetween(start, end),
    };
    this.toggleDrawer();
    addInternship(values);
  }

  onChange(name, event) {
    this.setState({
      [name]: event.target.value,
    });
  }

  onSetStartDate(event, date) {
    this.setState({
      start: date,
    });
  }

  onSetEndDate(event, date) {
    this.setState({
      end: date,
    });
  }

  render() {
    return (
      <FormWrapper>
        <CollapseWrapper in={this.state.open} {...{timeout: 2000}}>
          <div>
            <FieldsWrapper>
              <TextField
                id="outlined-name"
                label="Nume"
                value={this.state.nume}
                floatingLabelFixed={this.state.name !== ''}
                style={TextFieldStyle}
                onChange={event => this.onChange('name', event)}
              />
              <TextField
                id="outlined-description"
                label="Descriere"
                value={this.state.descriere}
                floatingLabelFixed={this.state.description !== ''}
                style={TextFieldStyle}
                onChange={event => this.onChange('description', event)}
              />
              <TextField
                id="outlined-topics"
                label="Subiecte"
                value={this.state.descriere}
                floatingLabelFixed={this.state.topics !== ''}
                style={TextFieldStyle}
                onChange={event => this.onChange('topics', event)}
              />
              <TextField
                id="outlined-places"
                label="Număr locuri"
                value={this.state.places}
                style={TextFieldStyle}
                onChange={event => this.onChange('places', event)}
              />
              <DatePicker
                floatingLabelText="Dată start"
                style={TextFieldStyle}
                value={this.state.start}
                cancelLabel='Anulează'
                onChange={this.onSetStartDate}
              />
              <DatePicker
                floatingLabelText="Dată sfârșit"
                style={TextFieldStyle}
                value={this.state.end}
                cancelLabel='Anulează'
                minDate={this.state.start}
                onChange={this.onSetEndDate}
              />
            </FieldsWrapper>
            <ButtonWrapper>
              <Button text="Adaugă" onClick={() => this.addInternship()} />
            </ButtonWrapper>
          </div>
        </CollapseWrapper>
        <Button onClick={() => this.toggleDrawer()} text={'Adaugă'} type={'ArrowDownButton'} />
      </FormWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addInternship: values => dispatch(addInternship(values)),
});

const withConnect = connect(null, mapDispatchToProps);

const withSaga = injectSaga({
  key: 'addInternshipSaga',
  saga: addInternshipSaga,
});

export default compose(
  withSaga,
  withConnect,
)(InternshipForm);
