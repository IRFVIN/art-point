import { Grid } from "@mui/material";
import ArtCardView from "./ArtCardView";

const ArtGridView = (props) => {
    console.log(props);
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {props.arts.map(art => (
                <Grid item xs={2} sm={4} md={4} key={art.id}>
                    <ArtCardView key={art.id} art={art} />
                </Grid>
            ))}
        </Grid>
    );
}

export default ArtGridView;
