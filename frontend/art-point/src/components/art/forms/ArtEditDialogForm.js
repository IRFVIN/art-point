import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Navigate } from 'react-router';

export default function ArtEditDialogForm(props) {
    const [open, setOpen] = React.useState(false);
    // const [msg, setMsg] = React.useState('');

    // const [title, setTitle] = React.useState(props.art.title);
    // const [description, setDescription] = React.useState(props.art.description);
    // const [price, setPrice] = React.useState(props.art.price);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const sender = useSelector(state => state.auth.user);
    const token = useSelector(state => state.auth.token);

    const handleSubmit = (event) => {
        // event.preventDefault();
        const data = new FormData(event.currentTarget);
        const artJSON = JSON.stringify({
            'id': props.art.id,
            'title': data.get('title'),
            'description': data.get('description'),
            'price': data.get('price'),
            'artCategory': 'test'
        });

        // const artJSONblob = new Blob([artJSON], {
        //     type: 'application/json'
        // });

        // let multipartFormData = new FormData();
        // multipartFormData.append('art', artJSONblob);
        // multipartFormData.append('image', data.get('image')[0]);
        //console.log(data.image[0]);
        console.log(artJSON);

        fetch('http://localhost:8080/art/' + props.art.id, {
            method: 'PUT',
            body: artJSON,
            headers: {
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json'
            }
        }).then(res => {

        }).catch(err => {
            console.log(err);
        });

        handleClose();
        // return <Navigate to="/" />;
    }

    // const handleTextInputChange = event => {
    //     setMsg(event.target.value);
    // };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Edit
            </Button>
            <Dialog
                component="form"
                onSubmit={handleSubmit}
                open={open}
                onClose={handleClose}>
                <DialogTitle>Edit</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add the details you want to update
                    </DialogContentText>


                    <div>
                        <TextField
                            variant="standard"
                            label="title"
                            name="title"
                            defaultValue={props.art.title}
                        />
                    </div>




                    <div>
                        <TextField
                            defaultValue={props.art.description}
                            variant="standard"
                            name="description"
                            multiline
                            maxRows={4}
                            label="description" />
                    </div>


                    <div>
                        <TextField
                            defaultValue={props.art.price}
                            name="price"
                            variant="standard"
                            label="price" />
                    </div>

                    {/* <div>
                        <input
                            name="image"
                            type="file" alt="Art Image" placeholder="Upload Art Image" />

                    </div> */}


                </DialogContent>
                <DialogActions>
                    <Button type="submit">Update</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
