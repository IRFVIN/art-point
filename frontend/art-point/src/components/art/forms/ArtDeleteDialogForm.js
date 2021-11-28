import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from 'react-redux';

export default function ArtDeleteDialogForm(props) {
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const sender = useSelector(state => state.auth.user);
    const token = useSelector(state => state.auth.token);
    const handleSubmit = () => {

        const url = "http://localhost:8080/art/" + props.art.id;

        console.log("deleted");

        fetch(url, {
            method: "DELETE",
            headers: {
                'Authorization': "Bearer " + token
            }
        });


        handleClose();
    }



    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Delete
            </Button>
            <Dialog
                component="form"
                onSubmit={handleSubmit}
                open={open} onClose={handleClose}>
                <DialogTitle>Write a message to seller</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete?
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
