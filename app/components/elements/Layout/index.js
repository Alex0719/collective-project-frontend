import React from 'react';
import PropTypes from 'prop-types';

import ProfileMenu from 'containers/elements/ProfileMenu';
import MenuButton from '../MenuButton';
import { OuterWrapper, AvatarWrapper, AvatarStyle, ImgButtonStyle } from './styles';
import Logo from '../../../images/logos/internlink-white-transparent.png';

export class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      btnActive: props.location.pathname === '/company/internships',
      imgActive: props.location.pathname === '/',
    }
  }

  handleClickBtnInternships() {
    const { changeRoute } = this.props;

    this.setState({
      imgActive: false,
      btnActive: true,
    });
    changeRoute('/company/internships')
  }

  handleClickImgBtn() {
    const { changeRoute } = this.props;

    this.setState({
      imgActive: true,
      btnActive: false,
    });
    changeRoute('/')
  }

  renderButtons() {
    const { loggedUser, location } = this.props;

    switch(loggedUser.role) {
      case 'Company':
        return (
          <div>
            <MenuButton
              active={this.state.btnActive}
              text="Internships"
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

    return (
      <OuterWrapper>
        <MenuButton
          active={this.state.imgActive}
          onClick={() => this.handleClickImgBtn()}
          style={ImgButtonStyle}
          text={
            <img
              width={140}
              height={50}
              src={Logo}
              alt="no image found"
            />
          }
        />
        {this.renderButtons()}
        <AvatarWrapper>
          <ProfileMenu loggedUser={loggedUser}/>
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
