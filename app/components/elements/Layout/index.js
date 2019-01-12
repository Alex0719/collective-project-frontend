import React from 'react';
import PropTypes from 'prop-types';

import ProfileMenu from 'containers/elements/ProfileMenu';
import MenuButton from '../MenuButton';
import { OuterWrapper, AvatarWrapper, AvatarStyle, ImgButtonStyle } from './styles';
import Logo from '../../../images/logos/internlink-white-transparent.png';
import Logo2 from '../../../images/logos/internlink-transparent.png';
import { AERO_BLUE } from 'constants/colors';

export class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      btnActive: props.location.pathname === '/company/internships',
      imgActive: props.location.pathname === '/',
    }
  }

  handleClickBtnInternships() {
    const { changeRoute, loggedUser } = this.props;
    const route = loggedUser && loggedUser.role && loggedUser.role === 'Company' ?
      '/company/internships' : '/internships/management';
    this.setState({
      imgActive: false,
      btnActive: true,
    });
    changeRoute(route);
  }

  handleClickImgBtn() {
    const { changeRoute } = this.props;

    this.setState({
      imgActive: true,
      btnActive: false,
    });
    changeRoute('/');
  }

  unfocusButtons() {
    this.setState({
      imgActive: false,
      btnActive: false,
    });
  }

  renderButtons() {
    const { loggedUser, location } = this.props;

    switch(loggedUser.role) {
      case 'Company':
      case 'Student':
        const color = loggedUser.role === 'Company' ? AERO_BLUE : 'white';
        return (
          <div>
            <MenuButton
              active={this.state.btnActive}
              text="Internships"
              color={color}
              onClick={() => this.handleClickBtnInternships()}
            />
          </div>
        );
      default:
        return;
    }
  }

  render() {
    const { location, loggedUser } = this.props;
    const LogoToShow = this.state.imgActive ? Logo2 : Logo;
    const color = loggedUser && loggedUser.role && loggedUser.role === 'Student' ? 'white' : AERO_BLUE;

    return (
      <OuterWrapper>
        <MenuButton
          active={this.state.imgActive}
          onClick={() => this.handleClickImgBtn()}
          style={ImgButtonStyle}
          isImg
          color={color}
          text={
            <img
              width={140}
              height={50}
              style={{marginRight: '5px'}}
              src={LogoToShow}
              alt="no image found"
            />
          }
        />
        {this.renderButtons()}
        <AvatarWrapper>
          <ProfileMenu loggedUser={loggedUser} unfocusButtons={() =>  this.unfocusButtons()}/>
        </AvatarWrapper>
      </OuterWrapper>
    );
  }
}

Layout.propTypes = {
  changeRoute: PropTypes.func.isRequired,
  loggedUser: PropTypes.object,
};

export default Layout;
