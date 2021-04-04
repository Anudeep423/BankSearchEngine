import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';


const headCells = [
    { id: 'bank_name', numeric: false, disablePadding: false, label: 'Bank' },
    { id: 'ifsc', numeric: true, disablePadding: false, label: 'IFSC' },
    { id: 'bank_id', numeric: true, disablePadding: false, label: 'Bank ID' },
    { id: 'district', numeric: true, disablePadding: false, label: 'District' },
    { id: 'state', numeric: true, disablePadding: false, label: 'State' }
  
  ];


function EnhancedTableHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
          
          </TableCell> 
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? '' : ''}
              padding={headCell.disablePadding ? '' : ''}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  export default EnhancedTableHead;