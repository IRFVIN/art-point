import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PreviewIcon from '@mui/icons-material/Preview';
import { useSelector } from "react-redux";
import ArtDeleteDialogForm from "../forms/ArtDeleteDialogForm";
import ArtEditDialogForm from "../forms/ArtEditDialogForm";

const ArtCardView = (props) => {
    const [imgObjURL, setImgObjURL] = useState('');

    //const imageURL = "http://localhost:8080/images/" + props.art.id + ".png";
    const imageURL = "http://localhost:8080/image/" + props.art.id;

    useEffect(() => {
        fetch(imageURL)
            .then(res => res.blob())
            .then(imgBlob => {
                const url = URL.createObjectURL(imgBlob);
                setImgObjURL(url);
                console.log(url);
            })
    }, [imageURL]);

    // let editDeleteOptions = null;
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    let userId = null;

    const user = useSelector(state => state.auth.user);
    if (user) {
        userId = user.id;
    }
    const artOwnerId = props.art.owner.id;

    const showOPtions = isLoggedIn && userId === artOwnerId;

    // if (isLoggedIn && userId === artOwnerId) {
    //     editDeleteOptions = <div>
    //         <Button
    //             component={Link} to={'#'}
    //             size="small" variant="contained"
    //             startIcon={<AddShoppingCartIcon />}
    //             onClick={() => { console.log("add to cart: " + props.art.id); }}
    //         >
    //             Edit
    //         </Button>
    //         <Button
    //             component={Link} to={'#'}
    //             size="small" variant="contained"
    //             startIcon={<AddShoppingCartIcon />}
    //             onClick={() => { console.log("add to cart: " + props.art.id); }}
    //         >
    //             Delete
    //         </Button>
    //     </div>
    // }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                // image={imageURL}
                image={imgObjURL}
                alt={props.art.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.art.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.art.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    sx = {{mr : 1}}
                    component={Link} to={"/art/" + props.art.id}
                    size="small" variant="outlined"
                    startIcon={<PreviewIcon />}
                >
                    View
                </Button>
                {showOPtions ? <ArtDeleteDialogForm art={props.art} /> : null}
                {showOPtions ? <ArtEditDialogForm art={props.art} /> : null}
            </CardActions>
        </Card>
    );
}

export default ArtCardView;

