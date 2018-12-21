import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { internshipsSelector } from 'selectors/companySelectors';
import { getInternships } from 'actions/companyActions';
import { getInternshipsSaga } from 'sagas/companySagas';
import injectSaga from 'utils/injectSaga';
import InternshipsComponent from 'components/pages/Internships';

export class Internships extends React.Component {
  componentWillMount() {
    this.props.getInternships();
  }

  render() {
    console.log('from selector', this.props.internships);
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
      <InternshipsComponent internships={mockInternships} />
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
