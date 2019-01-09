import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { IconButton, IconMenu, Avatar, Divider, Checkbox } from 'material-ui';

import injectSaga from 'utils/injectSaga';
import loginUserSaga from 'sagas/loginSagas';
import logoutUserSaga from 'sagas/logoutSagas';
import profileIcon from 'images/profileIcon.png';
import TextField from 'components/elements/TextField';
import Button from 'components/elements/Button';
import { loginUser, getLoggedUser } from 'actions/loginActions';
import { logoutUser } from 'actions/logoutActions';
import { AvatarStyle } from 'components/elements/Layout/styles';
import Alert from 'react-s-alert';
import {
  IconButtonStyle,
  TextFieldStyle,
  IconMenuInnerWrapper,
  TitleWrapper,
  DividerStyle,
  ButtonWrapper,
  CheckboxStyle,
  Link,
} from './styles';

export class ProfileMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      email: '',
      password: '',
      rememberMe: false,
    };
  }

  buildIcon() {
    const { loggedUser } = this.props;
    const avatar =
      loggedUser && loggedUser.picture ? (
        <Avatar style={AvatarStyle} src={loggedUser.picture} />
      ) : (
        <Avatar style={AvatarStyle} src={profileIcon} />
      );

    return <IconButton style={IconButtonStyle}>{avatar}</IconButton>;
  }

  onOpen() {
    this.setState({ open: true });
  }

  onRequestChange(open, reason) {
    if (!open && reason === 'clickAway') {
      this.setState({ open: false });
    }
  }

  onChange(name, event) {
    this.setState({
      [name]: event.target.value,
    });
  }

  onCheck(event){
    this.setState({
      rememberMe: event.target.checked,
    });
  }

  showAlert(message, error)
  {
      if(error)
      {
        Alert.error(message, {
          position: 'top-right',
          effect: 'jelly'
        });
      }
      else
      {
        Alert.success(message, {
          position: 'top-right',
          effect: 'jelly'
        });
      }
  }

  handleLogin() {
    const { email, password, rememberMe } = this.state;
    const { login } = this.props;
    const credentials = {
      email,
      password,
      rememberMe,
    };

    this.setState({ open: false });
    login(credentials,this.showAlert);
  }

  renderLogout() {
    return (
      <IconMenuInnerWrapper>
        <Button
          type="DividerButton"
          text="Profil"
          onClick={() => console.log('click')}
        />
        <Button
          type="DividerButton"
          text="Logout"
          onClick={() => this.props.logout()}
        />
      </IconMenuInnerWrapper>
    );
  }

  renderLogin() {
    return (
      <IconMenuInnerWrapper>
        <TitleWrapper>Login</TitleWrapper>
        <Divider style={DividerStyle} />
        <TextField
          id="outlined-name"
          label="Email"
          value={this.state.email}
          style={TextFieldStyle}
          onChange={event => this.onChange('email', event)}
        />
        <TextField
          id="outlined-password"
          label="Password"
          type="password"
          value={this.state.password}
          style={TextFieldStyle}
          onChange={event => this.onChange('password', event)}
        />
        <Checkbox
          label="Ține-mă minte"
          style={CheckboxStyle}
          value={this.state.rememberMe}
          onCheck={event => this.onCheck(event)}
        />
        <ButtonWrapper>
          <Button text="Login" onClick={() => this.handleLogin()} />
        </ButtonWrapper>
        <Link>Creează cont student</Link>
      </IconMenuInnerWrapper>
    );
  }

  renderContent() {
    const { loggedUser } = this.props;

    return loggedUser.role ? this.renderLogout() : this.renderLogin();
  }

  render() {
    return (
      <IconMenu
        iconButtonElement={this.buildIcon()}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        targetOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={this.state.open}
        onClick={() => this.onOpen()}
        onRequestChange={(open, reason) => this.onRequestChange(open, reason)}
      >
        {this.renderContent()}
      </IconMenu>
    );
  }
}

ProfileMenu.propTypes = {
  loggedUser: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  login: (values,funAlert) => dispatch(loginUser(values,funAlert)),
  getLoggedUser: () => dispatch(getLoggedUser()),
  logout: () => dispatch(logoutUser()),
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withSaga = injectSaga({
  key: 'loginSaga',
  saga: loginUserSaga,
});

const withLogoutSaga = injectSaga({
  key: 'logoutSaga',
  saga: logoutUserSaga,
});

export default compose(
  withSaga,
  withLogoutSaga,
  withConnect,
)(ProfileMenu);
