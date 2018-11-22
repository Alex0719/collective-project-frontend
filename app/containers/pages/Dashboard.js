import React from 'react';
import DashboardComponent from '../../components/pages/Dashboard';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import {
  getStudentCountSaga,
  getCompanyCountSaga,
  getInternshipCountSaga,
} from '../../sagas/dashboardSagas';
import {
  studentCountSelector,
  companyCountSelector,
  internshipCountSelector,
} from '../../selectors/dashboardSelectors';
import {
  getStudentCount,
  getCompanyCount,
  getInternshipCount,
} from '../../actions/dashboardActions';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getStudentCount();
    this.props.getCompanyCount();
  }

  render() {
    return (
      <div>
        <DashboardComponent
          counts={{
            studentCount: this.props.studentCount,
            companyCount: this.props.companyCount,
            internshipCount: 10,
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state =>
  createStructuredSelector({
    studentCount: studentCountSelector(state)(),
    companyCount: companyCountSelector(state)(),
    internshipCount: internshipCountSelector(state)(),
  });

const mapDispatchToProps = dispatch => ({
  getStudentCount: () => dispatch(getStudentCount()),
  getCompanyCount: () => dispatch(getCompanyCount()),
  getInternshipCount: () => dispatch(getInternshipCount()),
});

Dashboard.propTypes = {
  getStudentCount: PropTypes.func,
  studentCount: PropTypes.number,
  getCompanyCount: PropTypes.func,
  companyCount: PropTypes.number,
  getInternshipCount: PropTypes.func,
  internshipCount: PropTypes.number,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withStudentSaga = injectSaga({
  key: 'getStudentCountSaga',
  saga: getStudentCountSaga,
});

const withCompanySaga = injectSaga({
  key: 'getCompanyCountSaga',
  saga: getCompanyCountSaga,
});

const withInternshipSaga = injectSaga({
  key: 'getInternshipCountSaga',
  saga: getInternshipCountSaga,
});

export default compose(
  withStudentSaga,
  withCompanySaga,
  withInternshipSaga,
  withConnect,
)(Dashboard);
