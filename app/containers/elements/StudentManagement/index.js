import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './stil.css';
import { TableContainer, ButtonWrapper } from './styles';
import Button from '../../../components/elements/Button';
import { studentManagementSelector } from '../../../selectors/studentManagementSelector';
import {
  getApplications,
  getCv,
  selectStudent,
  approveStudent,
  rejectStudent,
  getAvailability,
} from 'actions/studentManagement';
import {
  getApplicationsSaga,
  getCvSaga,
  selectStudentSaga,
  approveStudentSaga,
  rejectStudentSaga,
  getAvailabilitySaga,
} from '../../../sagas/studentManagementSagas';

export class StudentManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      nrPlaces: 2,
      applications: [],
      seePdf: false,
      cv: null,
    };
  }
  componentWillMount() {
    this.props.getApplications();
    this.props.getAvailability();
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
  

  onSelectStudent(row) {
    this.props.selectStudent(row, this.props.getApplications);
  }

  onAcceptStudent(row) {
    this.props.approveStudent(row, this.props.getApplications);
  }

  onRejectStudent(row) {
    this.props.rejectStudent(row, this.props.getApplications);
  }

  renderLink(cell, row) {
    return <Button text="Vezi cv" onClick={() => this.onClickCv(row.Id)} />;
  }

  onClickCv(id) {
    this.props.getCv(id, this.props.applications.applications[id-1]);
  }

  showCv(cv) {
    const file = new Blob([cv.Cv], { type: 'application/pdf' });
  }

  render() {
    console.log("aici ",this.state.id)
    const applications = Object.values(this.props.applications.applications);
    console.log(this.props);
    const availability = this.props.applications.availability;
    if (
      applications == null ||
      applications == undefined ||
      applications.length == 0
    )
      return null;
    return (
      <TableContainer>
        Locuri ocupate: {availability.OccupiedPlaces} din{' '}
        {availability.TotalPlaces}
        <Helmet>
          <link
            rel="stylesheet"
            href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"
          />
        </Helmet>
        <BootstrapTable
          data={applications}
          stripped
          hover
          search
          className="stock-table"
        >
          <TableHeaderColumn width="100" dataField="Id" isKey>
            Id
          </TableHeaderColumn>
          <TableHeaderColumn width="100" dataField="Fullname">
            Student
          </TableHeaderColumn>
          <TableHeaderColumn
            width="100"
            dataField="button"
            dataAlign="center"
            editable={false}
            dataFormat={this.renderLink.bind(this)}
          >
            CV
          </TableHeaderColumn>
          <TableHeaderColumn width="100" dataField="Status">
            Status
          </TableHeaderColumn>
          <TableHeaderColumn
            width="100"
            dataField="button"
            dataAlign="center"
            editable={false}
            dataFormat={this.renderButton.bind(this)}
          >
            Actiune
          </TableHeaderColumn>
        </BootstrapTable>
      </TableContainer>
    );
  }
}

const mapStateToProps = state =>
  createStructuredSelector({
    applications: studentManagementSelector(state)(),
  });
const mapDispatchToProps = dispatch => ({
  getApplications: () => dispatch(getApplications()),
  getCv: (values, fun) => dispatch(getCv(values, fun)),
  selectStudent: (values, fun) => dispatch(selectStudent(values, fun)),
  approveStudent: (values, fun) => dispatch(approveStudent(values, fun)),
  rejectStudent: (values, fun) => dispatch(rejectStudent(values, fun)),
  getAvailability: values => dispatch(getAvailability(values)),
});

StudentManagement.propTypes = {
  getApplications: PropTypes.func,
  getCv: PropTypes.func,
  selectStudent: PropTypes.func,
  approveStudent: PropTypes.func,
  rejectStudent: PropTypes.func,
  getAvailability: PropTypes.func,
  applications: PropTypes.object,
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
  withConnect,
)(StudentManagement);
