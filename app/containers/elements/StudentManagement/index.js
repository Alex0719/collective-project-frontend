import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './stil.css';
import {TableContainer,ButtonWrapper} from './styles'
import Button from '../../../components/elements/Button'
import {studentManagementSelector} from '../../../selectors/studentManagementSelector'
import { getApplications, getCv, selectStudent, approveStudent,rejectStudent,getAvailability } from 'actions/studentManagement';
import {getApplicationsSaga, getCvSaga,
     selectStudentSaga, approveStudentSaga,
     rejectStudentSaga, getAvailabilitySaga} from '../../../sagas/studentManagementSagas'
import Alert from 'react-s-alert';
import { selectLoggedUser } from 'selectors/profileMenuSelector';
import getRoleSaga from 'sagas/roleSagas';
import { requestRole } from 'actions/roleActions';

export class StudentManagement extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            status:'',
            nrPlaces:2,
            applications:[],
            seePdf:false,
            cv:null
        }
    }
    componentWillMount() {
        this.props.getApplications(this.redirectFunction);
        this.props.getAvailability();
        this.props.fetchRole();
    }

    componentWillUpdate(nextProps) {
      if(
        nextProps.loggedUser.role !== this.props.loggedUser.role &&
        nextProps.loggedUser.role === 'Student'
      ) {
        this.redirectFunction();
      }
    }

    renderButton(cell,row)
    {
        if (row.Status.toLowerCase()=="aplicat")
        {
            return (
                <ButtonWrapper>
                    <Button text={"Selecteaza"} onClick={()=>{this.onSelectStudent(row)}}/>
                </ButtonWrapper>);

        }
        else if(row.Status.toLowerCase()=="examinare")
        {
            return(
                <ButtonWrapper>
                    <Button text={"Aproba"} onClick={()=>{this.onAcceptStudent(row)}}/>
                    <Button text={"Respinge"} onClick={()=>{this.onRejectStudent(row)}}/>
                </ButtonWrapper>
            );

        }
    }

  
  onClickCv(id) {
    this.props.getCv(id, this.props.applications.applications[id-1]);
  }

  showCv(cv) {
    const file = new Blob([cv.Cv], { type: 'application/pdf' });
  }

    redirectFunction=()=>
    {
        this.props.history.push("/unauthorized");
    }

    showAlert(message, error)
  {
      if(error)
      {
        Alert.error(message, {
          position: 'top-right',
          effect: 'jelly'
        });
      }
      else
      {
        Alert.success(message, {
          position: 'top-right',
          effect: 'jelly'
        });
      }
  }

    onSelectStudent(row)
    {
       this.props.selectStudent(row,this.props.getApplications,this.showAlert);
    }

    onAcceptStudent(row)
    {
        this.props.approveStudent(row,this.props.getApplications,this.showAlert);
    }

    onRejectStudent(row)
    {
       this.props.rejectStudent(row,this.props.getApplications,this.showAlert);
    }

    renderLink(cell,row)
    {
        return (
          <ButtonWrapper>
            <Button text="Vezi cv" onClick={()=>this.onClickCv(row.Id)}/>
          </ButtonWrapper>
        );
    }

   

    render() {
        var applications = Object.values(this.props.applications.applications);
        var availability= this.props.applications.availability;
        if(applications==null || applications==undefined || applications.length==0)return(null);
        return (
            <TableContainer>
             Locuri ocupate: {availability.OccupiedPlaces} din {availability.TotalPlaces}
            <Helmet>
            <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"/>
            </Helmet>
            <BootstrapTable data={applications}
                            stripped={true}
                            hover={true}
                            search={ true }
                            className="stock-table"
                            >
            <TableHeaderColumn width={'10%'} thStyle={{textAlign: 'center'}} dataAlign={'center'} dataField='Id' isKey={true}>Id</TableHeaderColumn>
            <TableHeaderColumn width={'25%'} thStyle={{textAlign: 'center'}} dataAlign={'center'} dataField='Fullname'>Student</TableHeaderColumn>
            <TableHeaderColumn width={'20%'} thStyle={{textAlign: 'center'}} dataField="button" dataAlign={'center'} editable={false} dataFormat={this.renderLink.bind(this)}>CV</TableHeaderColumn>
            <TableHeaderColumn width={'20%'} thStyle={{textAlign: 'center'}} dataField='Status' dataAlign={'center'}>Status</TableHeaderColumn>
            <TableHeaderColumn width={'25%'} thStyle={{textAlign: 'center'}} dataField="button" dataAlign={'center'} editable={false} dataFormat={this.renderButton.bind(this)}>Actiune</TableHeaderColumn>
            </BootstrapTable>
            </TableContainer>

        );

      }
    }

const mapStateToProps = state =>{
  return createStructuredSelector({
    applications: studentManagementSelector(state)(),
    loggedUser: selectLoggedUser(state)(),
  });
}
const mapDispatchToProps = dispatch => ({
  fetchRole: () => dispatch(requestRole()),
  getApplications: (redirectFunction) => dispatch(getApplications(redirectFunction)),
  getCv:(values, fun)=>dispatch(getCv(values, fun)),
  selectStudent:(values,fun, funAlert)=>dispatch(selectStudent(values,fun,funAlert)),
  approveStudent:(values,fun, funAlert)=>dispatch(approveStudent(values,fun,funAlert)),
  rejectStudent:(values,fun,funAlert)=>dispatch(rejectStudent(values,fun,funAlert)),
  getAvailability:(values)=>dispatch(getAvailability(values))
});

StudentManagement.propTypes = {
  getApplications: PropTypes.func,
  getCv: PropTypes.func,
  selectStudent:PropTypes.func,
  fetchRole: PropTypes.func,
  approveStudent:PropTypes.func,
  rejectStudent:PropTypes.func,
  getAvailability:PropTypes.func,
  applications: PropTypes.object,
  loggedUser: PropTypes.object,
};

const withApplicationSaga = injectSaga({
  key: 'getApplicationsSaga',
  saga: getApplicationsSaga,
});
const withCvSaga = injectSaga({
  key: 'getCvSaga',
  saga: getCvSaga,
});
const withSelectStudentSaga = injectSaga({
  key: 'selectStudentSaga',
  saga: selectStudentSaga,
});
const withApproveStudentSaga = injectSaga({
  key: 'approveStudentSaga',
  saga: approveStudentSaga,
});
const withRejectStudentSaga = injectSaga({
  key: 'rejectStudentSaga',
  saga: rejectStudentSaga,
});

const withAvailabilitySaga = injectSaga({
  key: 'getAvailabilitySaga',
  saga: getAvailabilitySaga,
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
  withApplicationSaga,
  withCvSaga,
  withSelectStudentSaga,
  withApproveStudentSaga,
  withRejectStudentSaga,
  withAvailabilitySaga,
  withRoleSaga,
  withConnect
)(StudentManagement);
