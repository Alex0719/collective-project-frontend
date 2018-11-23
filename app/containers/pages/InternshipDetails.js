import React from 'react';
import InternshipDetailsComponent from '../../components/pages/InternshipDetails';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import { getInternshipDetailsSaga } from '../../sagas/internshipDetailsSagas';
import { internshipDetailsSelector } from '../../selectors/internshipDetailsSelectors';
import { getInternshipDetails } from '../../actions/internshipDetailsActions';

class InternshipDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getDetails();
  }

  render() {
    const { details } = this.props;
    console.log(details);
    return (
      <div>
        <InternshipDetailsComponent
          internshipDetails={{
            internship: details.internshipDetails,
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state =>
  createStructuredSelector({
    details: internshipDetailsSelector(state)(),
  });

const mapDispatchToProps = dispatch => ({
  getDetails: () => dispatch(getInternshipDetails(2)),
});

InternshipDetails.propTypes = {
  getDetails: PropTypes.func,
  details: PropTypes.any,
};

const withDetailsSaga = injectSaga({
  key: 'getInternshipDetailsSaga',
  saga: getInternshipDetailsSaga,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withDetailsSaga,
  withConnect,
)(InternshipDetails);
