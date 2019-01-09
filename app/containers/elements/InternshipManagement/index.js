import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import { getInternshipsForStudent, confirmExamAttendance, confirmInternshipParticipation, refuseInternship } from 'actions/internshipManagement';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './stil.css';
import Button from '../../../components/elements/Button';
import { internshipManagementSelector } from '../../../selectors/internshipManagementSelector';
import { getInternshipsForStudentSaga, confirmExamAttendanceSaga, confirmInternshipParticipationSaga, refuseInternshipSaga } from '../../../sagas/internshipManagementSagas';
import { TableContainer, ButtonWrapper } from './styles';

class InternshipManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { internships: [] };
  }

  componentWillMount() {
    this.props.getInternships();
  }

  renderButton(cell,row)
  {
    if (row.Status.toLowerCase()=="contactat")
    {
      return (
        <ButtonWrapper>
          <Button text={"Participa la examen"} onClick={()=>{this.onParticipaStudent(row)}}/>
        </ButtonWrapper>);

    }
    else if(row.Status.toLowerCase()=="aprobat")
    {
      return(
        <ButtonWrapper>
          <Button text={"Participa la internship"} onClick={()=>{this.onAcceptInternship(row)}}/>
          <Button text={"Respinge"} onClick={()=>{this.onRefuseInternship(row)}}/>
        </ButtonWrapper>
      );

    }
  }

  onParticipaStudent(row)
  {
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
    console.log(this.props.internships);
    // const internships = Object.values(this.props.internships);
    const { internships } = this.props;
    console.log(this.props);
    // if (
    //   internships == null ||
    //   internships == undefined ||
    //   internships.length == 0
    // )
    //   return null;
    // ii ok daca schimb putin? Normal
    return (
      <div>
        {internships.length ? (
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
              className="stock-table"
            >
              <TableHeaderColumn width="100" dataField="Id" isKey>
                Id
              </TableHeaderColumn>
              <TableHeaderColumn width="100" dataField="Company">
                Company
              </TableHeaderColumn>
              <TableHeaderColumn width="100" dataField="Name">
                Name
              </TableHeaderColumn>
              <TableHeaderColumn width="100" dataField="Status">
                Status
              </TableHeaderColumn>
              <TableHeaderColumn width={'100'} dataField="button" dataAlign={'center'} editable={false} dataFormat={this.renderButton.bind(this)}>Actiune</TableHeaderColumn>
              {/* <TableHeaderColumn width={'100'} dataField="button" dataAlign={'center'} editable={false} dataFormat={this.renderButton.bind(this)}>Actiune</TableHeaderColumn> */}
            </BootstrapTable>
          </TableContainer>
        ) : (
          <div />
        )}
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
};

const mapStateToProps = state =>
  createStructuredSelector({
    internships: internshipManagementSelector(state)(),
  });

const mapDispatchToProps = dispatch => ({
  getInternships: () => dispatch(getInternshipsForStudent()),
  confirmExam: (values, fun) => dispatch(confirmExamAttendance(values, fun)),
  confirmParticipation: (values, fun) => dispatch(confirmInternshipParticipation(values,fun)),
  refuse: (values, fun) => dispatch(refuseInternship(values, fun)),
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

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withInternshipsForStudentSaga,
  withConfirmParticipationSaga,
  withConfirmExamSaga,
  withRefuseSaga,
  withConnect,
)(InternshipManagement);
