import React from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import 'react-accessible-accordion/dist/minimal-example.css';
import { getStudentDashboardCompaniesSaga, subscribeStudentSaga, unsubscribeStudentSaga } from "../../sagas/dashboardSagas";
import { studentDashboardSelector } from "../../selectors/dashboardSelectors";
import { getStudentDashboardCompanies, subscribeStudent, unsubscribeStudent } from "../../actions/dashboardActions";
import { AERO_BLUE } from "../../constants/colors";
import styled from "styled-components";
import StudentDashboardList from "../../components/pages/StudentDashboard";

class StudentDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getCompanies();
  }

  subscribe = (companyId) => {
    console.log("%csubscribe " + companyId, "color: green");
    this.props.subscribe(companyId);
  }

  unsubscribe = (companyId) => {
    console.log("%cunsubscribe " + companyId, "color: orange");
    this.props.unsubscribe(companyId);

  }

  render() {
    const { companies } = this.props;
    return (
      <StudentDashboardList
        subscribeHandler={(id) => this.subscribe(id)}
        unsubscribeHandler={(id) => this.unsubscribe(id)}
        companies={companies}
      />
    );
  }

}

const mapStateToProps = state =>
  createStructuredSelector({
    companies: studentDashboardSelector(state)(),
  });

const mapDispatchToProps = dispatch => ({
  getCompanies: () => dispatch(getStudentDashboardCompanies()),
  subscribe: (companyId) => dispatch(subscribeStudent(companyId)),
  unsubscribe: (companyId) => dispatch(unsubscribeStudent(companyId))
});

StudentDashboard.propTypes = {
  getCompanies: PropTypes.func,
  companies: PropTypes.any,
  subscribe: PropTypes.func,
  unsubscribe: PropTypes.func
};

const withStudentDashboardSaga = injectSaga({
  key: 'getStudentDashboardCompaniesSaga',
  saga: getStudentDashboardCompaniesSaga,
});

const withSubscribeStudentSaga = injectSaga({
  key: 'subscribeStudentSaga',
  saga: subscribeStudentSaga,
});

const withUnsubscribeStudentSaga = injectSaga({
  key: 'unsubscribeStudentSaga',
  saga: unsubscribeStudentSaga,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withStudentDashboardSaga,
  withSubscribeStudentSaga,
  withUnsubscribeStudentSaga,
  withConnect
)(StudentDashboard);
