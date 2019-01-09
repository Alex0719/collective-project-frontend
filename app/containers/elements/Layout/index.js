import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import Cookies from 'js-cookie';

import LayoutComponent from 'components/elements/Layout';
import { selectLoggedUser } from 'selectors/profileMenuSelector';
import { requestRole } from 'actions/roleActions';
import injectSaga from 'utils/injectSaga';
import getRoleSaga from 'sagas/roleSagas';

/* eslint-disable react/prefer-stateless-function */
export class Layout extends React.Component {
  componentWillMount() {
    if (Cookies.get('Identity')) {
      this.props.fetchRole();
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.loggedUser.role !== nextProps.loggedUser.role ||
      this.props.loggedUser.email !== nextProps.loggedUser.email;
  }

  render() {
    const { changeRoute, loggedUser } = this.props;

    return (
      <LayoutComponent
        loggedUser={loggedUser}
        changeRoute={route => changeRoute(route)}
        location={this.props.history.location}
      />
    );
  }
}

Layout.propTypes = {
  changeRoute: PropTypes.func.isRequired,
  loggedUser: PropTypes.object.isRequired,
  fetchRole: PropTypes.func,
};

const mapStateToProps = state =>
  createStructuredSelector({
    loggedUser: selectLoggedUser(state)(),
  });

const mapDispatchToProps = dispatch => ({
  changeRoute: route => dispatch(push(route)),
  fetchRole: () => dispatch(requestRole()),
});

const withSaga = injectSaga({
  key: 'roleSaga',
  saga: getRoleSaga,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withSaga,
  withConnect,
)(Layout);
