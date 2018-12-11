import React from 'react';
import { TextField } from 'material-ui';
import PropTypes from 'prop-types';

import { LabelStyle, UnderlineStyle } from './styles';

const TextFieldComponent = ({ id, label, onChange, type, value, style, multiLine = false }) => {
  return (
    <TextField
      id={id}
      floatingLabelText={label}
      floatingLabelFocusStyle={LabelStyle}
      underlineFocusStyle={UnderlineStyle}
      type={type}
      onChange={onChange}
      value={value}
      margin={'normal'}
      style={style}
      multiLine={multiLine}
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
  ]).isRequired,
  style: PropTypes.object,
};

export default TextFieldComponent;
