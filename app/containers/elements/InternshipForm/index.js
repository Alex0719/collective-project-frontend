import React from 'react';
import { DatePicker } from 'material-ui';

import TextField from 'components/elements/TextField';
import { TextFieldStyle } from 'containers/elements/ProfileMenu/styles';
import { ButtonWrapper, FieldsWrapper } from 'containers/elements/InternshipForm/styles';
import Button from 'components/elements/Button';
import { FormWrapper, CollapseWrapper } from './styles';

export class InternshipForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      name: '',
      description: '',
      topics: '',
      start: '',
      end: '',
      weeks: '',
    };
  }

  toggleDrawer() {
    this.setState({
      open: !this.state.open,
    });
  }

  onChange(name, event) {
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    return (
      <FormWrapper>
        <CollapseWrapper in={this.state.open}>
          <div>
            <FieldsWrapper>
              <TextField
                id="outlined-name"
                label="Nume"
                value={this.state.nume}
                style={TextFieldStyle}
                onChange={event => this.onChange('name', event)}
              />
              <TextField
                id="outlined-description"
                label="Descriere"
                value={this.state.descriere}
                style={TextFieldStyle}
                onChange={event => this.onChange('description', event)}
              />
              <TextField
                id="outlined-topics"
                label="Subiecte"
                value={this.state.descriere}
                style={TextFieldStyle}
                onChange={event => this.onChange('topics', event)}
              />
              <DatePicker
                floatingLabelText="Dată start"
              />
              <DatePicker
                floatingLabelText="Dată sfârșit"
              />
            </FieldsWrapper>
            <ButtonWrapper>
              <Button text="Adaugă" onClick={() => {}} />
            </ButtonWrapper>
          </div>
        </CollapseWrapper>
        <Button onClick={() => this.toggleDrawer()} text={'Adaugă'} type={'ArrowDownButton'} />
      </FormWrapper>
    );
  }
}

export default InternshipForm;
