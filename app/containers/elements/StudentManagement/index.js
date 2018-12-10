import React from 'react';
import ReactDataGrid from 'react-data-grid';
import {Helmet} from 'react-helmet'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './stil.css';
import {TableContainer} from './styles'
export default class StudentManagement extends React.Component
{
    render() {
        const objs=[{'id':0,'student':'Ionel Marcel','cv':"Vezi cv-ul",'status':'Acceptat'},
        {'id':1,'student':'Ionel Marcelescu','cv':"Vezi cv-ul",'status':'Acceptat'}]
        const columns = [
            { key: 'id', name: 'id' },
            { key: 'student', name: 'student' },
            { key: 'cv', name: 'cv' },
            { key: 'status', name: 'status' } ];
          
        console.log(objs);
        return (
            // <ReactDataGrid
            // columns={objs}
            // rowGetter={i => objs[i]}
            // rowsCount={2}
            // minHeight={150} />);

            <TableContainer>
            <Helmet>
            <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"/>
            </Helmet>
            <BootstrapTable data={objs} 
                            stripped={true}
                            hover={true}
                            search={ true }
                            className="stock-table"
                            >
            <TableHeaderColumn width={100} dataField='student' isKey={true}>Student</TableHeaderColumn>
            <TableHeaderColumn width={100} dataField='cv'>CV</TableHeaderColumn>
            <TableHeaderColumn width={100} dataField='status'>Status</TableHeaderColumn>
            <TableHeaderColumn width={100} dataField="button" dataAlign={'center'} editable={false} dataFormat={()=>{}}>Actiune</TableHeaderColumn>
            </BootstrapTable>
            </TableContainer>
        
        );
        
      }

}