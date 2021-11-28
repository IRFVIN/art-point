import { Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import { deepOrange, green } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PreviewIcon from '@mui/icons-material/Preview';

const UserCardView = (props) => {
    const [imgObjURL, setImgObjURL] = useState('');

    //const imageURL = "http://localhost:8080/images/" + props.art.id + ".png";
    // const imageURL = "http://localhost:8080/image/" + props.user.id;

    // useEffect(() => {
    //     fetch(imageURL)
    //         .then(res => res.blob())
    //         .then(imgBlob => {
    //             const url = URL.createObjectURL(imgBlob);
    //             setImgObjURL(url);
    //             console.log(url);
    //         })
    // }, [imageURL]);

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="div"
                height="140"
                sx={{
                    textAlign: "center",
                    height: "150px",
                    background: "#512DA8",
                    fontSize: "50px",
                    marginTop: "auto",
                    color: "#fff"
                }}
                // image={imageURL}
                // image={imgObjURL}
                alt={props.user.firstName}
            >
                {props.user.firstName.charAt(0) + props.user.lastName.charAt(0)}
            </CardMedia>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.user.firstName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.user.firstName}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    component={Link} to={"/user/" + props.user.id}
                    size="small" variant="outlined"
                    startIcon={<PreviewIcon />}
                >
                    View
                </Button>
                <Typography component="legend">Ratings</Typography>
                <Rating name="read-only" value={props.user.rating} readOnly />
            </CardActions>
        </Card>
    );
}

export default UserCardView;

