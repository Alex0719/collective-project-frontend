import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import Cookies from 'js-cookie';

// import HomePageComponent from 'components/pages/HomePage';
import { requestRole } from 'actions/roleActions';
import { selectLoggedUser } from 'selectors/profileMenuSelector';
import injectSaga from 'utils/injectSaga';
import getRoleSaga from 'sagas/roleSagas';
import Company from 'containers/pages/Company';
import Dashboard from 'containers/pages/Dashboard';

// eslint-disable-next-line react/prefer-stateless-function
export class HomePage extends React.Component {
  componentWillMount() {
    if (Cookies.get('Identity')) {
      this.props.fetchRole();
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.loggedUser.role !== nextProps.loggedUser.role ||
      this.props.loggedUser.email !== nextProps.loggedUser.email;
  }

  renderDashboard() {
    const { loggedUser } = this.props;

    switch(loggedUser.role) {
      case 'Company':
        return <Company />;
      default:
        return <Dashboard />;
    }
  }

  count(number) {
    let flags = Array(number).fill(true,2);
    for(let i=2; i<number;i++) {
      if(flags[i]) {
        for(let multiple = i*2; multiple<number;multiple+=i) {
          flags[multiple] = false;
        }
      }
    }
    return flags.filter(v=>v).length;
  }

  render() {
    console.log('mi-e foame',this.count(new Date().getDate()));
    return (
      <div>
        {this.renderDashboard()}
      </div>
    );
  }
}

HomePage.propTypes = {
  changeRoute: PropTypes.func.isRequired,
  loggedUser: PropTypes.object.isRequired,
  fetchRole: PropTypes.func,
};

const mapStateToProps = state =>
  createStructuredSelector({
    loggedUser: selectLoggedUser(state)(),
  });

const mapDispatchToProps = dispatch => ({
  changeRoute: route => dispatch(push(route)),
  fetchRole: () => dispatch(requestRole()),
});

const withSaga = injectSaga({
  key: 'roleSaga',
  saga: getRoleSaga,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withSaga,
  withConnect,
)(HomePage);
