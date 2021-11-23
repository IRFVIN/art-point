import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ChatFormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Chat with sender
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Write a message to seller</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Write a message to seller
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Write your message here"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Send Message</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
