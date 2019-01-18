import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import { getInternshipsForStudent, confirmExamAttendance, confirmInternshipParticipation, refuseInternship } from 'actions/internshipManagement';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './stil.css';
import Button from '../../../components/elements/Button';
import { internshipManagementSelector } from '../../../selectors/internshipManagementSelector';
import { getInternshipsForStudentSaga, confirmExamAttendanceSaga, confirmInternshipParticipationSaga, refuseInternshipSaga } from '../../../sagas/internshipManagementSagas';
import { TableContainer, ButtonWrapper } from './styles';
import { selectLoggedUser } from 'selectors/profileMenuSelector';
import getRoleSaga from 'sagas/roleSagas';
import { requestRole } from 'actions/roleActions';

class InternshipManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { internships: [] };
  }

  componentWillMount() {
    this.props.getInternships();
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

  renderButton(cell,row)
  {
    if (row.Status.toLowerCase()=="contactat")
    {
      return (
        <ButtonWrapper>
          <Button text={"Participă la examen"} onClick={()=>this.onParticipaStudent(row)}/>
        </ButtonWrapper>);

    }
    else if(row.Status.toLowerCase()=="aprobat")
    {
      return(
        <ButtonWrapper>
          <Button text={"Participă la internship"} onClick={()=>{this.onAcceptInternship(row)}}/>
          <Button text={"Respinge"} onClick={()=>{this.onRefuseInternship(row)}}/>
        </ButtonWrapper>
      );

    }
  }

  onParticipaStudent(row)
  {
    console.log(row);
    this.props.confirmExam(row, this.props.getInternships);
  }

  onAcceptInternship(row)
  {
    this.props.confirmParticipation(row, this.props.getInternships);
  }

  onRefuseInternship(row)
  {
    this.props.refuse(row, this.props.getInternships);
  }

  render() {
    const { internships } = this.props;
    const options = {
      noDataText: 'Nu există niciun internship',
    };
    if(this.props.loggedUser && this.props.loggedUser.role === "") {
      return null;
    }

    return (
      <div>
          <TableContainer>
            <Helmet>
              <link
                rel="stylesheet"
                href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"
              />
            </Helmet>
            <BootstrapTable
              data={internships}
              stripped
              hover
              search
              options={options}
              trStyle={{textAlign: 'center'}}
              className="stock-table"
            >
              <TableHeaderColumn width={'10%'} thStyle={{textAlign: 'center'}} dataAlign={'center'} dataField="Id" isKey>
                Id
              </TableHeaderColumn>
              <TableHeaderColumn width={'25%'} thStyle={{textAlign: 'center'}} dataAlign={'center'} dataField="Company">
                Company
              </TableHeaderColumn>
              <TableHeaderColumn width={'25%'} thStyle={{textAlign: 'center'}} dataAlign={'center'} dataField="Name">
                Name
              </TableHeaderColumn>
              <TableHeaderColumn width={'15%'} thStyle={{textAlign: 'center'}} dataAlign={'center'} dataField="Status">
                Status
              </TableHeaderColumn>
              <TableHeaderColumn width={'30%'} thStyle={{textAlign: 'center'}} dataField="button" dataAlign={'center'} editable={false} dataFormat={this.renderButton.bind(this)}>Actiune</TableHeaderColumn>
              {/* <TableHeaderColumn width={'100'} dataField="button" dataAlign={'center'} editable={false} dataFormat={this.renderButton.bind(this)}>Actiune</TableHeaderColumn> */}
            </BootstrapTable>
          </TableContainer>
      </div>
    );
  }
}

InternshipManagement.propTypes = {
  getInternships: PropTypes.func,
  internships: PropTypes.any,
  confirmParticipation: PropTypes.func,
  confirmExam: PropTypes.func,
  refuse: PropTypes.func,
  fetchRole: PropTypes.func,
  loggedUser: PropTypes.object,
  redirect: PropTypes.func,
};

const mapStateToProps = state =>
  createStructuredSelector({
    internships: internshipManagementSelector(state)(),
    loggedUser: selectLoggedUser(state)(),
  });

const mapDispatchToProps = dispatch => ({
  fetchRole: () => dispatch(requestRole()),
  getInternships: () => dispatch(getInternshipsForStudent()),
  confirmExam: (values, fun) => dispatch(confirmExamAttendance(values, fun)),
  confirmParticipation: (values, fun) => dispatch(confirmInternshipParticipation(values,fun)),
  refuse: (values, fun) => dispatch(refuseInternship(values, fun)),
  redirect: () => dispatch(push('/unauthorized')),
});

const withInternshipsForStudentSaga = injectSaga({
  key: 'getInternshipsForStudentSaga',
  saga: getInternshipsForStudentSaga,
});

const withConfirmParticipationSaga = injectSaga({
  key: 'confirmInternshipParticipationSaga',
  saga: confirmInternshipParticipationSaga,
});
const withConfirmExamSaga = injectSaga({
  key: 'confirmExamAttendanceSaga',
  saga: confirmExamAttendanceSaga,
});
const withRefuseSaga = injectSaga({
  key: 'refuseInternshipSaga',
  saga: refuseInternshipSaga,
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
  withInternshipsForStudentSaga,
  withConfirmParticipationSaga,
  withConfirmExamSaga,
  withRoleSaga,
  withRefuseSaga,
  withConnect,
)(InternshipManagement);
