import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Art = () => {
    const [imgObjURL, setImgObjURL] = useState('');
    const [art, setArt] = useState({});
    let params = useParams();


    useEffect(() => {
        const url = "http://localhost:8080/art/" + params.artId;
        fetch(url).then(res => res.json()).then(
            res => {
                setArt(res);
            }
        );
    }, []);

    const imageURL = "http://localhost:8080/images/" + params.artId + ".png";

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
        <Card sx={{
            maxWidth: 400,
            margin: "auto"
        }}>
            <CardMedia
                component="img"
                // height="140"
                // image={imageURL}
                image={imgObjURL}
                alt={art.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {art.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {art.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Buy Now</Button>
                <Button size="small">Add to Cart</Button>
            </CardActions>
        </Card>
    );
}

export default Art;

