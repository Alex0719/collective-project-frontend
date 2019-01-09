import React from 'react';
import InternshipDetailsComponent from '../../components/pages/InternshipDetails';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import { getInternshipDetailsSaga, getInternshipTestimonialsSaga, putInternshipDetailsSaga } from '../../sagas/internshipDetailsSagas';
import { internshipDetailsSelector } from '../../selectors/internshipDetailsSelectors';
import { getInternshipDetails, getInternshipTestimonials, putInternshipDetails } from '../../actions/internshipDetailsActions';

class InternshipDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getTestimonials();
    this.props.getDetails();
  }

  shouldComponentUpdate(nextProps){
    return this.props.details !== nextProps.details;
  }

  render() {
    const { details } = this.props;
    if(isEmpty(details.internship)) {
      return null;
    }

    return (
      <div>
        <InternshipDetailsComponent onSaveChanges={this.props.putDetails}
          internshipDetails={{
            internship: details.internship,
            ratingCompany: details.ratingCompany,
            ratingInternship: details.ratingInternship,
            ratingMentors: details.ratingMentors,
          }}
          changeRoute={this.props.changeRoute}
          internshipId={this.props.match.params.id}
          testimonials = {details.testimonials}
        />
      </div>
    );
  }
}

function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

const mapStateToProps = state =>
  createStructuredSelector({
    details: internshipDetailsSelector(state)(),
  });

const mapDispatchToProps = (dispatch, {match: {params: {id}}}) => ({
  getDetails: () => dispatch(getInternshipDetails(id)),
  getTestimonials: () => dispatch(getInternshipTestimonials(id)),
  putDetails: updatedObject => dispatch(putInternshipDetails(id,updatedObject)),
  changeRoute: route => dispatch(push(route)),
});

InternshipDetails.propTypes = {
  getDetails: PropTypes.func,
  getTestimonials: PropTypes.func,
  putDetails: PropTypes.func,
  details: PropTypes.object,
};

const withDetailsSaga = injectSaga({
  key: 'getInternshipDetailsSaga',
  saga: getInternshipDetailsSaga,
});

const withTestimonialsSaga = injectSaga({
  key: 'getInternshipTestimonialsSaga',
  saga: getInternshipTestimonialsSaga,
});

const withUpdateDetailsSaga = injectSaga({
  key: 'putInternshipDetailsSaga',
  saga: putInternshipDetailsSaga,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withDetailsSaga,
  withTestimonialsSaga,
  withUpdateDetailsSaga,
  withConnect,
)(InternshipDetails);
