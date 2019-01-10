import React from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'react-router-redux';
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

  render() {
    const { companies } = this.props;
    return (
      <StudentDashboardList
        subscribeHandler={(id) => this.props.subscribe(id)}
        unsubscribeHandler={(id) => this.props.unsubscribe(id)}
        companies={companies}
        redirect={this.props.redirect}
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
  unsubscribe: (companyId) => dispatch(unsubscribeStudent(companyId)),
  redirect: id => dispatch(push(`/internship/${id}`)),
});

StudentDashboard.propTypes = {
  getCompanies: PropTypes.func,
  companies: PropTypes.any,
  subscribe: PropTypes.func,
  unsubscribe: PropTypes.func,
  redirect: PropTypes.func.isRequired,
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
