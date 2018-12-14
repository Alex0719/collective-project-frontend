import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import {Helmet} from 'react-helmet'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './stil.css';
import {TableContainer,ButtonWrapper} from './styles'
import Button from '../../../components/elements/Button'
import {studentManagementSelector} from '../../../selectors/studentManagementSelector'
import { getApplications, getCv } from 'actions/studentManagement';
import {getApplicationsSaga, getCvSaga} from '../../../sagas/studentManagementSagas'

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
        this.props.getApplications();
    }

    renderButton(cell,row)
    {
        if (row.Status=="Aplicat")
        {
            return (
                <ButtonWrapper>
                    <Button text={"Selecteaza"} onClick={()=>{this.onSelectStudent(row)}}/>
                </ButtonWrapper>);
        
        }
        else if(row.Status=="Examinare")
        {
            return(
                <ButtonWrapper>
                    <Button text={"Aproba"} onClick={()=>{this.onAcceptStudent(row)}}/> 
                    <Button text={"Respinge"} onClick={()=>{this.onRejectStudent(row)}}/> 
                </ButtonWrapper>
            );
              
        }  
    }

    onSelectStudent(row)
    {
       console.log("selectat", row);
       
        //trimite mail ca a fost selectat la internshipul cu id-ul din path pt studentul cu id din row
        //schimba statusul pe back si frontend in  contactat
    }

    onAcceptStudent(row)
    {
        console.log("aprobat", row);
        //trimite mail si scade nr of places          
    }

    onRejectStudent(row)
    {
        console.log("respins", row);
    }

    renderLink(cell,row)
    {
        return <Button text="Vezi cv" onClick={()=>this.onClickCv(row.Id)}/>
    }

    onClickCv(id)
    {
        this.props.getCv(id,this.showCv); 
    }

    showCv(cv)
    {
        console.log(" Cv show ",cv.Cv)
        // this.setState({cv:cv.Cv});
        // this.setState({seePdf:true});
        const file = new Blob(
            [cv.Cv], 
            {type: 'application/pdf'});
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(fileURL);
    }
    onDocumentLoadSuccess()
    {
        console.log("success");
        // this.setState({cv:null});
        // this.setState({seePdf:false});
        
    }

    render() {
        var applications = Object.values(this.props.applications.applications);
        if(applications==null || applications==undefined || applications.length==0)return(null);
        return (
            <TableContainer>
            Locuri: {this.state.nrPlaces}
            {/* {this.state.seePdf?
            <Document
            file={this.state.cv}
            onLoadSuccess={this.onDocumentLoadSuccess}/>
            :null} */}

            <Helmet>
            <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"/>
            </Helmet>
            <BootstrapTable data={applications} 
                            stripped={true}
                            hover={true}
                            search={ true }
                            className="stock-table"
                            >
            <TableHeaderColumn width={100} dataField='Id' isKey={true}>Id</TableHeaderColumn>
            <TableHeaderColumn width={100} dataField='Fullname'>Student</TableHeaderColumn>
            <TableHeaderColumn width={100} dataField="button" dataAlign={'center'} editable={false} dataFormat={this.renderLink.bind(this)}>CV</TableHeaderColumn>
            <TableHeaderColumn width={100} dataField='Status'>Status</TableHeaderColumn>
            <TableHeaderColumn width={100} dataField="button" dataAlign={'center'} editable={false} dataFormat={this.renderButton.bind(this)}>Actiune</TableHeaderColumn>
            </BootstrapTable>
            </TableContainer>
        
        );
        
      }
}

const mapStateToProps = state =>{
    console.log("asta",state)
  return createStructuredSelector({
    applications: studentManagementSelector(state)()
  });
}
const mapDispatchToProps = dispatch => ({
  getApplications: () => dispatch(getApplications()),
  getCv:(values, fun)=>dispatch(getCv(values, fun))
});

StudentManagement.propTypes = {
  getApplications: PropTypes.func,
  getCv: PropTypes.func,
  applications: PropTypes.object
};

const withApplicationSaga = injectSaga({
  key: 'getApplicationsSaga',
  saga: getApplicationsSaga,
});

const withCvSaga = injectSaga({
    key: 'getCvSaga',
    saga: getCvSaga,
  });

  
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withApplicationSaga,
  withCvSaga,
  withConnect
)(StudentManagement);
