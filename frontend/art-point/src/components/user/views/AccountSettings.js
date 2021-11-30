import { Card, CardContent, TextField, CardActions, Button, Collapse, Alert } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Navigate } from "react-router";
import { useDispatch } from 'react-redux';

import { login } from '../../../store/store';

const AccountSettings = (props) => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const token = useSelector(state => state.auth.token);
    const user = useSelector(state => state.auth.user);
    const [alert, setAlert] = useState(false);
    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const updatedUserJson = JSON.stringify({
            "id": user.id,
            "firstName": data.get("firstName"),
            "lastName": data.get("lastName"),
            "email": data.get("email"),
            "phone": data.get("phone")
        });
        console.log(updatedUserJson);

        const url = props.baseURL + "/" + user.id;
        console.log(url);
        fetch(url, {
            method: 'PUT',
            body: updatedUserJson,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            }
        }).then(res => res.json()).then(res => {
            console.log(res);
            return res;
        }).then(res => {
            dispatch(login(res));
        });

    }

    if (!isLoggedIn) {
        return (
            <Navigate to="/" />
        );
    }
    return (<div>
        <Collapse in={alert}>
            <Alert>Account Details Updated</Alert>
        </Collapse>
        <Card
            component="form"
            onSubmit={submitHandler}
        >
            <CardContent>
                <div>
                    <TextField
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        label="firstName"
                        name="firstName"
                        defaultValue={user.firstName}
                    />
                </div>

                <div>
                    <TextField
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        label="lastName"
                        name="lastName"
                        defaultValue={user.lastName}
                    />
                </div>

                <div>
                    <TextField
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        label="email"
                        name="email"
                        defaultValue={user.email}
                    />
                </div>

                <div>
                    <TextField
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        label="Mobile number"
                        name="phone"
                        defaultValue={user.phone}
                    />
                </div>
            </CardContent>
            <CardActions>
                <Button fullWidth variant="contained" type="submit">Update</Button>
            </CardActions>
        </Card>
    </div>);
}

export default AccountSettings;