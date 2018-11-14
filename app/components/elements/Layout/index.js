import React from 'react';
import PropTypes from 'prop-types';

import { OuterWrapper, AvatarWrapper } from './styles';
import ProfileMenu from 'containers/elements/ProfileMenu';
import MenuButton from '../MenuButton';

const Layout = ({ changeRoute, loggedUser }) => (
  <OuterWrapper>
    <MenuButton text="Dashboard" onClick={changeRoute} />
    <MenuButton text="Internships" onClick={() => {}} />
    <AvatarWrapper>
      <ProfileMenu loggedUser={loggedUser}/>
    </AvatarWrapper>
  </OuterWrapper>
);

Layout.propTypes = {
  changeRoute: PropTypes.func.isRequired,
};

export default Layout;
