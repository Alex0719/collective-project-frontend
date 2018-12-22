import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { getStudentsPerYear } from 'actions/companyActions';
import { getStudentsPerYearSaga } from 'sagas/companySagas';
import { studentsPerYearSelector } from 'selectors/companySelectors';
import injectSaga from 'utils/injectSaga';
import CompanyComponent from 'components/pages/Company';

// eslint-disable-next-line react/prefer-stateless-function
class Company extends React.Component {
  componentWillMount() {
    this.props.getStudentsPerYear();
  }

  render() {
    console.log('spy', this.props.studentsPerYear);
    return <CompanyComponent />;
  }
}

const mapStateToProps = state =>
  createStructuredSelector({
    studentsPerYear: studentsPerYearSelector(state)(),
  });

const mapDispatchToProps = dispatch => ({
  getStudentsPerYear: () => dispatch(getStudentsPerYear()),
});

Company.propTypes = {
  getStudentsPerYear: PropTypes.func,
  studentsPerYear: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({
  key: 'getStudentsPerYearSaga',
  saga: getStudentsPerYearSaga,
});

export default compose(
  withSaga,
  withConnect,
)(Company);
