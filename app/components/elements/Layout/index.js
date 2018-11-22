import React from 'react';
import PropTypes from 'prop-types';

import { OuterWrapper, AvatarWrapper } from './styles';
import ProfileMenu from 'containers/elements/ProfileMenu';
import MenuButton from '../MenuButton';

import { OuterWrapper, AvatarWrapper, AvatarStyle } from './styles';
import Logo from '../../../images/logos/internlink-white-transparent.png';


const Layout = ({ changeRoute, loggedUser }) => (
  <OuterWrapper>
    <img width={180} height={50} src={Logo} alt="no image found" />
    <MenuButton text="Dashboard" changeRoute={changeRoute} />
    <MenuButton text="Internships" changeRoute={() => {}} />

    <AvatarWrapper>
      <ProfileMenu loggedUser={loggedUser}/>
    </AvatarWrapper>
  </OuterWrapper>
);

Layout.propTypes = {
  changeRoute: PropTypes.func.isRequired,
};

export default Layout;
