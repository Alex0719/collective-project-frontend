import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { internshipsSelector } from 'selectors/companySelectors';
import { getInternships } from 'actions/companyActions';
import { getInternshipsSaga } from 'sagas/companySagas';
import injectSaga from 'utils/injectSaga';
import InternshipsComponent from 'components/pages/Internships';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';

export class Internships extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getInternships();
  }

  render() {
    const mockInternships = [
      {
        id: 1,
        description: "Internship React",
        places: 8,
        topics: "React, JavaScript",
        start: "03-Mar-18",
        end: "03-May-18",
        weeks: 2
    },
    {
      id: 2,
      description: "Internship Angular",
      places: 23,
      topics: "Angular, JavaScript",
      start: "08-Sep-18",
      end: "03-May-19",
      weeks: 6
    }
  ];

    return (
      <div>
      <InternshipsComponent internships={this.props.internships} />
      <Alert stack={true} timeout={3000} />
      </div>
    );
  }
}

const mapStateToProps = state =>
  createStructuredSelector({
    internships: internshipsSelector(state)(),
  });

const mapDispatchToProps = dispatch => ({
  getInternships: () => dispatch(getInternships()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({
  key: 'getInternshipsSaga',
  saga: getInternshipsSaga,
});

export default compose (
    withSaga,
    withConnect,
)(Internships);
