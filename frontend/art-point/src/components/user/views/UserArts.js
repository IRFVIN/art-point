import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import ArtCardView from "../../art/views/ArtCardView";
import ArtPageView from "../../art/views/ArtPageView";

const UserArts = () => {

    const [arts, setArts] = useState([]);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const user = useSelector(state => state.auth.user);
    let userId = null;
    if (user) {
        userId = user.id;
    }

    if (!isLoggedIn) {
        return (
            <Navigate to="/" />
        );
    }

    if (!userId) return;

    const baseURL = `http://localhost:8080/user/${userId}/arts?`;

    return (
        <ArtPageView baseURL={baseURL} />
    );

    /*
    useEffect(() => {
        if (!userId) return;
        const url = "http://localhost:8080/user/" + userId + "/arts";
        fetch(url).then(res => {
            return res.json();
        }).then(res => {
            setArts(res.art);
        });
    }, []);

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {arts.map(art => (
                <Grid item xs={2} sm={4} md={4} key={art.id}>
                    <ArtCardView key={art.id} art={art} />
                </Grid>
            ))}
        </Grid>
    );
    */
}

export default UserArts;
