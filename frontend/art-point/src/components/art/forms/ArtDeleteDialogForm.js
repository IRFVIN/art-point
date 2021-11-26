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
    const [msg, setMsg] = React.useState('');


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const sender = useSelector(state => state.auth.user);
    const token = useSelector(state => state.auth.token);
    const handleSubmit = () => {
        console.log("hello " + msg);
        const receiver = props.art;
        const url = "http://localhost:8080/send";

        const chatObj = {
            sender: sender,
            receiver: receiver,
            message: msg
        }

        fetch(url, {
            method: "POST",
            body: JSON.stringify(chatObj),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            }
        });


        handleClose();
        setMsg('');
    }

    const handleTextInputChange = event => {
        setMsg(event.target.value);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Delete
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Write a message to seller</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete?
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit}>Cancel</Button>
                    <Button onClick={handleSubmit}>Delte</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
