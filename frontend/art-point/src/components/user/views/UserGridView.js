import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import UserCardView from "./UserCardView";

const UserGridView = (props) => {

    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     const url = "http://localhost:8080/sellers";
    //     fetch(url).then(res => {
    //         return res.json();
    //     }).then(res => {
    //         setUsers(res);
    //     });
    // }, []);

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {props.users.map(user => (
                <Grid item xs={2} sm={4} md={4} key={user.id}>
                    <UserCardView key={user.id} user={user} />
                </Grid>
            ))}
        </Grid>
    );
}

export default UserGridView;
