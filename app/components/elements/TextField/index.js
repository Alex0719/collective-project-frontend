import React from 'react';
import { TextField } from 'material-ui';
import PropTypes from 'prop-types';

import { LabelStyle, UnderlineStyle } from './styles';

const TextFieldComponent = ({ id, label, onChange, type, value, style,multiLine=false, disabled=false, floatingLabelFixed = false }) => {
  return (
    <TextField
      id={id}
      floatingLabelText={label}
      floatingLabelFocusStyle={LabelStyle}
      underlineFocusStyle={UnderlineStyle}
      floatingLabelFixed={floatingLabelFixed}
      type={type}
      onChange={onChange}
      value={value}
      margin={'normal'}
      style={style}
      multiline={multiLine}
      disabled={disabled}
    />
  );
}

TextFieldComponent.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  style: PropTypes.object,
};

export default TextFieldComponent;
