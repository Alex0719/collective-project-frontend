import React from 'react';
import PropTypes from 'prop-types';

import { Button, ActiveButton } from './styles';

export class MenuButton extends React.Component {
  render() {
    const MyButton = this.props.active ? ActiveButton : Button;
    const { text, onClick, style, isImg = false, color = 'white' } = this.props;

    return (
      <MyButton
        active={this.props.active}
        style={style}
        onClick={() => onClick()}
        isImg={isImg}
        color={color}
      >
        {text}
      </MyButton>
    );
  }
}

MenuButton.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default MenuButton;
