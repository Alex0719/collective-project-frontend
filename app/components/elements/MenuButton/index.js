import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

const MenuButton = ({ text, changeRoute }) => (
  <Button onClick={() => changeRoute('/test')}>{text}</Button>
);

MenuButton.propTypes = {
  text: PropTypes.string,
  changeRoute: PropTypes.func.isRequired,
};

export default MenuButton;
