import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import ArtItem from "./ArtItem";

const ArtGrid = () => {

    const [arts, setArts] = useState([]);

    useEffect(() => {
        const url = "http://localhost:8080/art";
        fetch(url).then(res => {
            return res.json();
        }).then(res => {
            setArts(res);
        });
    }, []);

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {arts.map(art => (
                <Grid item xs={2} sm={4} md={4} key={art.id }>
                    <ArtItem key={art.id} art={art} />
                </Grid>
            ))}
        </Grid>
    );
}

export default ArtGrid;
