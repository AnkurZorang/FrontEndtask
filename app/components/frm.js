import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import axios from 'axios';

export default function FrmDialog({onchangestate}) {
  const [open, setOpen] = React.useState(false);             //used for determing whether the dialog is open or close
  const [name,setName]= React.useState('');
  const [no,setNumber]= React.useState('');
  const [lastname,setLastname]= React.useState('');

  const handleSub = async()=>{
    onchangestate(true);
    setOpen(false);                         
    const data= {                      //creating obect out of the inputted data
      no, name, lastname 
    }
     const res = await axios.post('http://localhost:8000/data',       //post request to add the inputted data
    JSON.stringify(data)
  )
}
  const handleClickOpen = () => {
    setOpen(true);                                    //to set open value to true hence the dialog will open up
  };

  const handleClose = () => {                      //setting open value to false so that dialog closes
    setOpen(false);
  };
 
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
       // onClose={handleClose}
        
      >
        <DialogTitle>ENTER NEW DATA</DialogTitle>
        <DialogContent>
          <TextField id="number-basic" label="Number" name="no" variant="outlined" onChange={(e)=>setNumber(e.target.value)} value={no} required />
          <TextField id="name-basic" label="Name" name="name" variant="outlined" onChange={(e)=>setName(e.target.value)} value={name} required />
          <TextField id="lastname-basic" label="LastName" name="lastname" variant="outlined" onChange={(e)=>setLastname(e.target.value)} value={lastname} required />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleSub}>Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
    
  );
}
