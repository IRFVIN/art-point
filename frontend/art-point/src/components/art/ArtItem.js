import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ArtItem = (props) => {
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
                <Button size="small">
                    <Link to={"/arts/" + props.art.id}>View</Link>
                </Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default ArtItem;

