import React from 'react';
import { TextField } from 'material-ui';
import PropTypes from 'prop-types';

import { LabelStyle, UnderlineStyle } from './styles';

const TextAreaComponent = ({ id, label, onChange, type, value, style }) => (
  <TextField
    id={id}
    floatingLabelText={label}
    floatingLabelFocusStyle={LabelStyle}
    underlineFocusStyle={UnderlineStyle}
    type={type}
    onChange={onChange}
    value={value}
    margin="normal"
    style={style}
    multiLine
  />
);

TextAreaComponent.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  style: PropTypes.object,
};

export default TextAreaComponent;
