import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export default function Addcustomer(props) {
   
    const [open, setOpen] = React.useState(false);

    const [customer, setCustomer] = React.useState({
        firstname: "",
        lastname: "",
        streetaddress: "",
        postcode: "",
        city: "",
        email: "",
        phone: ""
    })

    const handleClickOpen = () => {
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };
    
    const inputChanged = (event) => {
        setCustomer({...customer, [event.target.name]: event.target.value});
    }

    const addCustomer = () => {
        props.saveCustomer(customer);
        handleClose()
    }
   
return ( 
    <div>
        <Button style= {{margin: 10}} variant="outlined" onClick={handleClickOpen}>
            Add customer
        </Button>

        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add customer</DialogTitle>
                <DialogContent>
                 <TextField
                    autoFocus
                    margin="dense"
                    name="firstname"
                    value={customer.firstname}
                    onChange={inputChanged}
                    label="First name"
                    type="string"
                    fullWidth
                    variant="standard"
                    />
                 <TextField
                    margin="dense"
                    name="lastname"
                    value={customer.lastname}
                    onChange={inputChanged}
                    label="Last name"
                    type="string"
                    fullWidth
                    variant="standard"
                    />
                 <TextField
                    margin="dense"
                    name="streetaddress"
                    value={customer.streetaddress}
                    onChange={inputChanged}
                    label="Street address"
                    fullWidth
                    variant="standard"
                    />
                 <TextField
                    margin="dense"
                    name="postcode"
                    value={customer.postcode}
                    onChange={inputChanged}
                    label="Post code"
                    type="number"
                    fullWidth
                    variant="standard"
                    />
                 <TextField
                    margin="dense"
                    name="city"
                    value={customer.city}
                    onChange={inputChanged}
                    label="City"
                    fullWidth
                    variant="standard"
                    />
                 <TextField
                    margin="dense"
                    name="email"
                    value={customer.email}
                    onChange={inputChanged}
                    label="E-mail"
                    type="e-mail"
                    fullWidth
                    variant="standard"
                    />
                 <TextField
                    margin="dense"
                    name="phone"
                    value={customer.phone}
                    onChange={inputChanged}
                    label="Phone number"
                    fullWidth
                    variant="standard"
                    />
                </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color='error'>Cancel</Button>
            <Button onClick={addCustomer} color='success'>Save</Button>
        </DialogActions>
        </Dialog>
  </div>
   );
}