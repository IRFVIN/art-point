import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const CarouselItem = (props) => {
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



    return (
        <Card>
            <CardActionArea
                component={Link}
                to={"/art/" + props.art.id}
            >
                <CardMedia
                    component="img"
                    height="300"
                    // image={imageURL}
                    image={imgObjURL}
                    alt={props.art.title}
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.art.title}
                    </Typography>
                </CardContent>

            </CardActionArea>
        </Card>
        // <Card>
        //     <CardMedia
        //         component="img"
        //         height="140"
        //         // image={imageURL}
        //         image={imgObjURL}
        //         alt={props.art.title}
        //     />
        //     {/* <CardContent>
        //         <Typography gutterBottom variant="h5" component="div">
        //             {props.art.title}
        //         </Typography>
        //         <Typography variant="body2" color="text.secondary">
        //             {props.art.description}
        //         </Typography>
        //     </CardContent> */}

        // </Card>
    );
}

export default CarouselItem;

