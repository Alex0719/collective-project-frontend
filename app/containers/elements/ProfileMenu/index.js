import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { push } from 'react-router-redux';
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
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('wheel', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.onScroll);
  }

  onScroll() {
    this.setState({ open: false });
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
    const postLogout = [() => this.props.changeRoute('/')]

    return (
      <IconMenuInnerWrapper>
        {this.props.loggedUser.role==='Student'?
          <Button
            type="DividerButton"
            text="Profil"
            onClick={() => {
              this.props.changeRoute('/student');
              this.setState({open: false});
              this.props.unfocusButtons();
            }}
          /> : null
        }
        <Button
          type="DividerButton"
          text="Logout"
          onClick={() => this.props.logout(postLogout)}
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
          label="Parolă"
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
        <Link onClick={()=>{this.props.changeRoute("/register");this.setState({open: false})}}>Creează cont student</Link>
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
  logout: postLogout => dispatch(logoutUser(postLogout)),
  changeRoute: route => dispatch(push(route)),
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
