import React from 'react';
import InternshipStudentDetailsComponent from 'components/pages/InternshipStudentDetails';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import { getInternshipDetailsSaga, getInternshipTestimonialsSaga, putInternshipDetailsSaga } from '../../sagas/internshipDetailsSagas';
import { internshipDetailsSelector } from '../../selectors/internshipDetailsSelectors';
import { getInternshipDetails, getInternshipTestimonials, putInternshipDetails } from '../../actions/internshipDetailsActions';
import { selectLoggedUser } from 'selectors/profileMenuSelector';
import getRoleSaga from 'sagas/roleSagas';
import { requestRole } from 'actions/roleActions';

export class InternshipStudentDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getTestimonials();
    this.props.getDetails();
    this.props.fetchRole();
  }

  componentWillUpdate(nextProps) {
    if(
      nextProps.loggedUser.role !== this.props.loggedUser.role &&
      nextProps.loggedUser.role === 'Company'
    ) {
      this.props.redirect();
    }
  }

  shouldComponentUpdate(nextProps){
    return this.props.details !== nextProps.details;
  }

  render() {
    const { details } = this.props;
    if(isEmpty(details.internship)) {
      return null;
    }
    if(this.props.loggedUser && this.props.loggedUser.role === "") {
      return null;
    }
    const {ratingCompany, ratingInternship, ratingMentors} = details;

    return (
      <div>
        <InternshipStudentDetailsComponent onSaveChanges={this.props.putDetails}
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
    loggedUser: selectLoggedUser(state)(),
  });

const mapDispatchToProps = (dispatch, {match: {params: {id}}}) => ({
  getDetails: () => dispatch(getInternshipDetails(id)),
  getTestimonials: () => dispatch(getInternshipTestimonials(id)),
  putDetails: updatedObject => dispatch(putInternshipDetails(id,updatedObject)),
  changeRoute: route => dispatch(push(route)),
  fetchRole: () => dispatch(requestRole()),
  redirect: () => dispatch(push('/unauthorized')),
});

InternshipStudentDetails.propTypes = {
  getDetails: PropTypes.func,
  getTestimonials: PropTypes.func,
  putDetails: PropTypes.func,
  details: PropTypes.object,
  loggedUser: PropTypes.object,
  fetchRole: PropTypes.func,
  redirect: PropTypes.func.isRequired,
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

const withRoleSaga = injectSaga({
  key: 'roleSaga',
  saga: getRoleSaga,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withDetailsSaga,
  withTestimonialsSaga,
  withUpdateDetailsSaga,
  withRoleSaga,
  withConnect,
)(InternshipStudentDetails);
