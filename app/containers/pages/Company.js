import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { getStudentsPerYear, getOurRatings } from 'actions/companyActions';
import { getStudentsPerYearSaga, getOurRatingsSaga } from 'sagas/companySagas';
import {
  studentsPerYearSelector,
  ourRatingsSelector,
} from 'selectors/companySelectors';
import injectSaga from 'utils/injectSaga';
import CompanyComponent from 'components/pages/Company';

// eslint-disable-next-line react/prefer-stateless-function
class Company extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.getStudentsPerYear();
    this.props.getOurRatings();
  }

  render() {
    console.log('ratingz', this.props.ratings);
    let realOrMock;
    if(Object.keys(this.props.ratings).length === 0){
      realOrMock =  {
        ratingInternship: 4.8,
        ratingCompany: 4.5,
        ratingMentors: 3.2
      }
    } else {
      realOrMock = this.props.ratings;
    }
    return <CompanyComponent
        studentsPerYear={this.props.studentsPerYear}
        ratings={realOrMock}
      />;
  }
}


const mapStateToProps = state =>
  createStructuredSelector({
    studentsPerYear: studentsPerYearSelector(state)(),
    ratings: ourRatingsSelector(state)()
  });

const mapDispatchToProps = dispatch => ({
  getStudentsPerYear: () => dispatch(getStudentsPerYear()),
  getOurRatings: () => dispatch(getOurRatings()),
});

Company.propTypes = {
  getStudentsPerYear: PropTypes.func,
  studentsPerYear: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  ratings: PropTypes.object,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({
  key: 'getStudentsPerYearSaga',
  saga: getStudentsPerYearSaga,
});

const withRatingsSaga = injectSaga({
  key: 'getOurRatingsSaga',
  saga: getOurRatingsSaga,
});

export default compose(
  withSaga,
  withRatingsSaga,
  withConnect,
)(Company);
