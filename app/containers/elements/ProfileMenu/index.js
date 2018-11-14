import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import {
  IconButton,
  IconMenu,
  MenuItem,
  Avatar,
  Divider,
} from 'material-ui';

import injectSaga from 'utils/injectSaga';
import loginUserSaga from 'sagas/loginSagas';
import { AvatarStyle } from 'components/elements/Layout/styles';
import {
  IconButtonStyle,
  TextFieldStyle,
  IconMenuInnerWrapper,
  TitleWrapper,
  DividerStyle,
  ButtonWrapper,
} from './styles';
import profileIcon from 'images/profileIcon.png';
import TextField from 'components/elements/TextField';
import Button from 'components/elements/Button';
import { loginUser, getLoggedUser } from 'actions/loginActions';

export class ProfileMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      email: '',
      password: '',
    };
  }

  // componentDidUpdate(prevProps) {
  //   const { getLoggedUser } = this.props;
  //
  //   if (prevProps.loggedUser !== this.props.loggedUser) {
  //     getLoggedUser();
  //   }
  // }
  //
  // shouldComponentUpdate(nextProps) {
  //   console.log(nextProps);
  //   return !this.props.loggedUser !== nextProps.loggedUser;
  // }

  buildIcon(user) {
    const avatar = (user && user.picture) ? (
      <Avatar
        style={AvatarStyle}
        src={user.picture}
      />
    ) : (
      <Avatar
        style={AvatarStyle}
        src={profileIcon}
      />
    );

    return <IconButton style={IconButtonStyle}>{avatar}</IconButton>
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

  handleLogin() {
    const { email, password } = this.state;
    const { login } = this.props;
    const credentials = {
      email,
      password,
      rememberMe: true,
    };

    this.setState({ open: false });
    login(credentials);

  }

  renderContent() {
    const { loggedUser } = this.props;

    return loggedUser ? (
      <Button text={'Logout'} onClick={() => console.log('click')} />
      ) : (
      <IconMenuInnerWrapper>
        <TitleWrapper>Login</TitleWrapper>
        <Divider style={DividerStyle}/>
        <TextField
          id={'outlined-name'}
          label={'Email'}
          value={this.state.email}
          style={TextFieldStyle}
          onChange={event => this.onChange('email', event)}
        />
        <TextField
          id={'outlined-password'}
          label={'Password'}
          type={'password'}
          value={this.state.password}
          style={TextFieldStyle}
          onChange={event => this.onChange('password', event)}
        />
        <ButtonWrapper>
          <Button text={'Login'} onClick={() => this.handleLogin()} />
        </ButtonWrapper>
      </IconMenuInnerWrapper>
    );
  }

  render() {
    const { loggedUser } = this.props;

    return (
      <IconMenu
        iconButtonElement={this.buildIcon(loggedUser)}
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

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(loginUser(values)),
  getLoggedUser: () => dispatch(getLoggedUser()),
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withSaga = injectSaga({
  key: 'loginSaga',
  saga: loginUserSaga,
});

export default compose(
  withSaga,
  withConnect,
)(ProfileMenu);
