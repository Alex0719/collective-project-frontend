import React from 'react';
import DashboardComponent from '../../components/pages/Dashboard';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import {
  getDashboardStatisticsSaga
} from '../../sagas/dashboardSagas';
import {
  dashboardStatisticsSelector
} from '../../selectors/dashboardSelectors';
import {
  getDashboardStatistics
} from '../../actions/dashboardActions';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getStatistics();
  }

  render() {
    const {statistics} = this.props;
    return (
      <div>
        <DashboardComponent
          counts={{
            studentCount: statistics.numberOfStudents,
            companyCount: statistics.numberOfCompanies,
            internshipCount: statistics.numberOfInternships,
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state =>
  createStructuredSelector({
    statistics: dashboardStatisticsSelector(state)(),
  });

const mapDispatchToProps = dispatch => ({
  getStatistics: () => dispatch(getDashboardStatistics()),
});

Dashboard.propTypes = {
  getStatistics: PropTypes.func,
  statistics: PropTypes.any,
};

const withStatisticsSaga = injectSaga({
  key: 'getDashboardStatisticsSaga',
  saga: getDashboardStatisticsSaga,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withStatisticsSaga,
  withConnect
)(Dashboard);
