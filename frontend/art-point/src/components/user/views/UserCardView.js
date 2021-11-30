import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PreviewIcon from '@mui/icons-material/Preview';
import { Box } from "@mui/system";

const UserCardView = (props) => {
    //const [imgObjURL, setImgObjURL] = useState('');

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
                    alignContent: "center",
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
                <Typography sx={{p : 5}} variant="h3">
                    {props.user.firstName.charAt(0) + props.user.lastName.charAt(0)}
                </Typography>
            </CardMedia>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.user.firstName}
                </Typography>
                <Box sx={{display: 'flex'}}>
                    <Typography component="legend">Rating</Typography>
                    <Rating name="read-only" value={props.user.rating} readOnly />
                </Box>
            </CardContent>
            <CardActions>
                <Button
                    component={Link} to={"/user/" + props.user.id}
                    size="small" variant="outlined"
                    startIcon={<PreviewIcon />}
                >
                    View
                </Button>
                
            </CardActions>
        </Card>
    );
}

export default UserCardView;

