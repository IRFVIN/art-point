import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";
import ArtCardView from "../../art/views/ArtCardView";
import ArtPageView from "../../art/views/ArtPageView";
import UserArtPageView from "../../art/views/UserArtPageView";

const UserArts = (props) => {

    const [arts, setArts] = useState([]);
    // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    // const user = useSelector(state => state.auth.user);
    // let userId = null;
    // if (user) {
    //     userId = user.id;
    // }
    let params = useParams();
    let userId = params.userId;

    if (!userId) {
        console.log("not present");
        return (
            <Navigate to="/" />
        );
    }

    // if (!userId) return;
    console.log(userId);

    const baseURL = `http://localhost:8080/user/${userId}/arts?`;

    return (
        <UserArtPageView baseURL={baseURL} />
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
