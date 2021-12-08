import React from 'react';
import Button from '@mui/material/Button';
import * as dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export default function Addtraining(props) {
   
    const [open, setOpen] = React.useState(false);

    const [training, setTraining] = React.useState({
        date: "",
        duration: "",
        activity: "",
        customer: ""
    })

    const handleClickOpen = () => {
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };
    
    const inputChanged = (event) => {
        setTraining({...training, [event.target.name]: event.target.value});
    }

    const addTraining = () => {
        props.saveTraining(training);
        handleClose()
    }
   
return ( 
    <div>
        <Button style= {{margin: 10}} variant="outlined" onClick={handleClickOpen}>
            Add training
        </Button>

        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add customer</DialogTitle>
                <DialogContent>
                 <TextField
                    autoFocus
                    margin="dense"
                    name ="date"
                    value={training.date}
                    onChange={inputChanged}
                    label="Date"
                    type="datetime-local"
                    fullWidth
                    variant="standard"
                    />
                 <TextField
                    margin="dense"
                    name="duration"
                    value={training.duration}
                    onChange={inputChanged}
                    label="duration"
                    type="string"
                    fullWidth
                    variant="standard"
                    />
                 <TextField
                    margin="dense"
                    name="activity"
                    value={training.activity}
                    onChange={inputChanged}
                    label="Activity"
                    fullWidth
                    variant="standard"
                    />
                 <TextField
                    margin="dense"
                    name="customer"
                    value={training.customer}
                    onChange={inputChanged}
                    label="Customer ID"
                    type="number"
                    fullWidth
                    variant="standard"
                    />
                </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color='error'>Cancel</Button>
            <Button onClick={addTraining} color='success'>Save</Button>
        </DialogActions>
        </Dialog>
  </div>
   );
}