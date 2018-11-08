import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import LayoutComponent from 'components/elements/Layout';

/* eslint-disable react/prefer-stateless-function */
export class Layout extends React.Component {
  render() {
    const { changeRoute } = this.props;

    return <LayoutComponent changeRoute={route => changeRoute(route)} />;
  }
}

Layout.propTypes = {
  changeRoute: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeRoute: route => dispatch(push(route)),
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Layout);
