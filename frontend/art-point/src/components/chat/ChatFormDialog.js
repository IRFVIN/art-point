import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from 'react-redux';

export default function ChatFormDialog(props) {
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
    // const receiver = props.art.owner;
    const url = "http://localhost:8080/send";

    const chatObj = {
      sender: sender,
      receiver: props.receiver,
      message: msg,
      art: props.art
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
        {props.reply ? "Reply" : "Chat with seller"}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Write a message to {props.receiver.firstName}</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Write a message to seller
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Write your message here"
            type="text"
            fullWidth
            variant="standard"
            value={msg}
            onChange={handleTextInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Send Message</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
