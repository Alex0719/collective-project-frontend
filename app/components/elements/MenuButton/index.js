import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

const MenuButton = ({ text, onClick }) => (
  <Button onClick={() => onClick()}>{text}</Button>
);

MenuButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default MenuButton;
