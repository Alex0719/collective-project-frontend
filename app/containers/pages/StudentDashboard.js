import React from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import 'react-accessible-accordion/dist/minimal-example.css';
import { getStudentDashboardCompaniesSaga } from "../../sagas/dashboardSagas";
import { studentDashboardSelector } from "../../selectors/dashboardSelectors";
import { getStudentDashboardCompanies } from "../../actions/dashboardActions";
import { AERO_BLUE } from "../../constants/colors";
import styled from "styled-components";
import StudentDashboardList from "../../components/pages/StudentDashboard";
import { selectLoggedUser } from "../../selectors/profileMenuSelector";
import { getLoggedUser } from "../../actions/loginActions";

class StudentDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getCompanies();
    this.props.getLoggedUser();
  }

  render() {
    const { companies } = this.props;
    return (
      <StudentDashboardList user={this.props.loggedUser} companies={companies} />
    );
  }

}

const mapStateToProps = state =>
  createStructuredSelector({
    companies: studentDashboardSelector(state)(),
    loggedUser: selectLoggedUser(state)()
  });

const mapDispatchToProps = dispatch => ({
  getCompanies: () => dispatch(getStudentDashboardCompanies()),
  getLoggedUser: () => dispatch(getLoggedUser())
});

StudentDashboard.propTypes = {
  getCompanies: PropTypes.func,
  companies: PropTypes.any,
  loggedUser: PropTypes.any,
  getLoggedUser: PropTypes.func
};

const withStudentDashboardSaga = injectSaga({
  key: 'getStudentDashboardCompaniesSaga',
  saga: getStudentDashboardCompaniesSaga,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withStudentDashboardSaga,
  withConnect
)(StudentDashboard);
