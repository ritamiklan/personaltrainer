import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function Editcustomer(props) {
   
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
        console.log(props.customer)
        setCustomer({
            firstname: props.customer.firstname,
            lastname: props.customer.lastname,
            streetaddress: props.customer.streetaddress,
            postcode: props.customer.postcode,
            city: props.customer.city,
            email: props.customer.email,
            phone: props.customer.phone
        })
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };
    
    const inputChanged = (event) => {
        setCustomer({...customer, [event.target.name]: event.target.value});
    }

    const updateCustomer = () => {
        props.updateCustomer(customer, props.customer.links[0].href);
        handleClose()
    }
   
return ( 
    <div>
        <Button onClick={handleClickOpen} size='small'>
        Edit
        </Button>

        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit customer</DialogTitle>
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
            <Button onClick={updateCustomer} color='success'>Save</Button>
        </DialogActions>
        </Dialog>
  </div>
   );
}