import React from 'react';
import PropTypes from 'prop-types';

import ProfileMenu from 'containers/elements/ProfileMenu';
import MenuButton from '../MenuButton';
import { OuterWrapper, AvatarWrapper, AvatarStyle } from './styles';
import Logo from '../../../images/logos/internlink-white-transparent.png';

const renderButtons = loggedUser => {
  switch(loggedUser.role) {
    case 'Company':
      return (
        <div>
          <MenuButton text="Internships" onClick={() => {}} />
        </div>
      );
    default:
      return;
  }
}

const Layout = ({ changeRoute, loggedUser }) => (
  <OuterWrapper>
    <img
      width={180}
      height={50}
      src={Logo}
      alt="no image found"
    />
    {renderButtons(loggedUser)}
    <AvatarWrapper>
      <ProfileMenu loggedUser={loggedUser}/>
    </AvatarWrapper>
  </OuterWrapper>
);

Layout.propTypes = {
  changeRoute: PropTypes.func.isRequired,
};

export default Layout;
