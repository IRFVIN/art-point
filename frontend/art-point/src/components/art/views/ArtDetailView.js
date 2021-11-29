import { Button, CardMedia, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ChatFormDialog from "../../chat/ChatFormDialog";
import ArtDeleteDialogForm from "../forms/ArtDeleteDialogForm";
import ArtEditDialogForm from "../forms/ArtEditDialogForm";

const ArtDetailView = () => {
    const [imgObjURL, setImgObjURL] = useState('');
    const [art, setArt] = useState({});
    let params = useParams();

    const url = "http://localhost:8080/art/" + params.artId;

    useEffect(() => {
        fetch(url).then(res => res.json()).then(
            res => {
                setArt(res);
                //console.log(res);
            }
        );
    }, [url]);

    const imageURL = "http://localhost:8080/image/" + params.artId;

    useEffect(() => {
        fetch(imageURL)
            .then(res => res.blob())
            .then(imgBlob => {
                const url = URL.createObjectURL(imgBlob);
                setImgObjURL(url);
                console.log(url);
            })
    }, [imageURL]);

    // art.rating = 3.5;

    //const imageURL = "http://localhost:8080/images/" + params.artId + ".png";

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const user = useSelector(state => state.auth.user);
    let userId = null;
    if (user) {
        userId = user.id;
    }

    if (!art['id']) {
        return <div>ART NOT FOUND</div>
    }
    else {

        let showOPtions = false;

        const artOwnerId = art.owner.id;

        showOPtions = isLoggedIn && userId === artOwnerId;

        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item md>
                        <CardMedia
                            component="img"
                            image={imgObjURL}
                            alt={art.title}
                        />
                    </Grid>
                    <Grid item md>
                        <Typography variant="h4" color="primary">
                            {art.title}
                        </Typography>
                        <Typography color="textSecondary">
                            by {art.owner ? art.owner.firstName : "null"}
                        </Typography>

                        <Rating name="read-only" value={parseFloat(art.owner.rating)} precision={0.5} readOnly />

                        <Typography variant="h6" color="textSecondary">
                            Description
                        </Typography>
                        <Typography color="textPrimary">
                            {art.description}
                        </Typography>

                        <Typography style={{ marginTop: 10 }} variant="h6" color="textSecondary">
                            Price: &#8377;{art.price}
                        </Typography>

                        {/* <Button style={{ marginTop: 10 }}
                        //component={Link} to={'#'}
                        size="small" variant="contained"
                        startIcon={<AddShoppingCartIcon />}
                        onClick={() => { console.log("add to cart: " + art.id); }}
                    >
                        Add to Cart
                    </Button> */}

                        {showOPtions ? <ArtDeleteDialogForm art={art} /> : <ChatFormDialog receiver={art.owner} art={art} />}
                        {showOPtions ? <ArtEditDialogForm art={art} /> : null}
                    </Grid>
                </Grid>
            </Box>

        );
    }
}

export default ArtDetailView;
