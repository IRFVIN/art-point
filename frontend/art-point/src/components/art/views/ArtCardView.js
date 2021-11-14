import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PreviewIcon from '@mui/icons-material/Preview';

const ArtCardView = (props) => {
    const [imgObjURL, setImgObjURL] = useState('');

    const imageURL = "http://localhost:8080/images/" + props.art.id + ".png";

    useEffect(() => {
        fetch(imageURL)
            .then(res => res.blob())
            .then(imgBlob => {
                const url = URL.createObjectURL(imgBlob);
                setImgObjURL(url);
                console.log(url);
            })
    }, [imageURL]);

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
                    component={Link} to={"/art/" + props.art.id}
                    size="small" variant="outlined"
                    startIcon={<PreviewIcon/>}
                >
                    View
                </Button>
                <Button
                    component={Link} to={'#'}
                    size="small" variant="contained"
                    startIcon={<AddShoppingCartIcon/>}
                    onClick={() => {console.log("add to cart: " + props.art.id);}}
                >
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
}

export default ArtCardView;

