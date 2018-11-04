import React from 'react';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';

import MenuButton from '../MenuButton';
import { OuterWrapper, AvatarWrapper, AvatarStyle } from './styles';

const Layout = ({ changeRoute }) => (
  <OuterWrapper>
    <MenuButton text="Dashboard" changeRoute={changeRoute} />
    <MenuButton text="Internships" changeRoute={() => {}} />
    <AvatarWrapper>
      <Avatar style={AvatarStyle}>AB</Avatar>
    </AvatarWrapper>
  </OuterWrapper>
);

Layout.propTypes = {
  changeRoute: PropTypes.func.isRequired,
};

export default Layout;
