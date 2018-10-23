import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { getCountries } from 'actions/testActions';
import getCountriesSaga from 'sagas/testSagas';
import { countriesSelector } from 'selectors/testSelectors';
import injectSaga from 'utils/injectSaga';
import TestComponent from 'components/pages/Test';

export class Test extends React.Component {
  componentWillMount() {
    this.props.getCountries();
  }

  render() {
    return <TestComponent countries={this.props.countries} />;
  }
}

const mapStateToProps = state =>
  createStructuredSelector({
    countries: countriesSelector(state)(),
  });

const mapDispatchToProps = dispatch => ({
  getCountries: () => dispatch(getCountries()),
});

Test.propTypes = {
  getCountries: PropTypes.func,
  countries: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

// const withReducer = injectReducer({ key: 'test', testReducer });
const withSaga = injectSaga({
  key: 'getCountriesSaga',
  saga: getCountriesSaga,
});

export default compose(
  // withReducer,
  withSaga,
  withConnect,
)(Test);
