import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tbl = (props) => {
      
      const rows = props.row;                           //used mui table
      let sz=0;
      for (let x in rows) {                          //cal total number of enteries in the object
        sz += 1;
      }
      const [ul,setUl]=React.useState(0);            //used for paging of the table
      const [val,setVal]=React.useState(0);           // used for getting the value from the dropdown
      const [k,setK]=React.useState(5);               //used for the total enteries to be shown in one page
    return ( 
        <div>
        <div>                    
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >No</TableCell>
            <TableCell align="right">NAME</TableCell>
            <TableCell align="right">LAST-NAME</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(0+ul,k+ul).map((row) => (           //slicing the table in k sizes and ul used for paging 
            <TableRow
              key={row.id}
            >
              <TableCell component="th" scope="row">
                {row.no}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.lastname}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
   
       <div>
       <button onClick={()=>{if(ul+k<=sz) setUl(ul+k)}} >Next</button>    {/*updating ul for next page */} 
       <button onClick={()=>{if(ul-k>=0) setUl(ul-k)}} >Prev</button>

</div>    
  <select  value={val} onChange={(e)=>{setVal(e.target.value)}}>
       <option value='5' >5</option>
       <option value='10'>10</option>
       <option value='15'>15</option>
       <option value='20'>20</option>
  </select>
  <button onClick={()=>{setK(val);}} >Submit</button>       {/*updating k to val from dropdown list*/} 

       </div>
        </div>
     );
}
 
export default Tbl;