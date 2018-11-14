import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import LayoutComponent from 'components/elements/Layout';
import { selectLoggedUser } from 'selectors/profileMenuSelector';

/* eslint-disable react/prefer-stateless-function */
export class Layout extends React.Component {
  shouldComponentUpdate(nextProps) {
    console.log(nextProps);
    return this.props.loggedUser!==nextProps.loggedUser;
  }

  render() {
    const { changeRoute, loggedUser } = this.props;

    return <LayoutComponent loggedUser={loggedUser} changeRoute={route => changeRoute(route)} />;
  }
}

Layout.propTypes = {
  changeRoute: PropTypes.func.isRequired,
};

const mapStateToProps = state => createStructuredSelector({
  loggedUser: selectLoggedUser(state)(),
});

const mapDispatchToProps = dispatch => ({
  changeRoute: route => dispatch(push(route)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Layout);
