import { Button, CardMedia, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";

const UserDetailView = () => {
    const [user, setUser] = useState(null);
    let params = useParams();

    const url = "http://localhost:8080/user/" + params.userId;

    useEffect(() => {
        fetch(url).then(res => res.json()).then(
            res => {
                setUser(res);
            }
        );
    }, [url]);

    //user.rating = 3.5;

    //const imageURL = "http://localhost:8080/images/" + params.artId + ".png";
    // const imageURL = "http://localhost:8080/image/" + params.artId;

    // useEffect(() => {
    //     fetch(imageURL)
    //         .then(res => res.blob())
    //         .then(imgBlob => {
    //             const url = URL.createObjectURL(imgBlob);
    //             setImgObjURL(url);
    //             console.log(url);
    //         })
    // }, [imageURL]);

    if (user == null) {
        return <div>loading</div>
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item md>
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
                    // alt={user.firstName}
                    >
                        {user.firstName.charAt(0) + user.lastName.charAt(0)}
                    </CardMedia>
                </Grid>
                <Grid item md>
                    <Typography variant="h4" color="primary">
                        {user.firstName + " " + user.lastName}
                    </Typography>
                    <Typography color="textSecondary">
                        by {user.email}
                    </Typography>

                    <Rating name="read-only" value={user.rating} readOnly />

                    <Typography variant="h6" color="textSecondary">
                        Description
                    </Typography>
                    <Typography color="textPrimary">
                        {/* {art.description} */}
                    </Typography>

                    <Typography style={{ marginTop: 10 }} variant="h6" color="textSecondary">
                        {/* Price: &#8377;{art.price} */}
                    </Typography>

                    <Button style={{ marginTop: 10 }}
                        //component={Link} to={'#'}
                        size="small" variant="contained"
                        startIcon={<AddShoppingCartIcon />}
                        component={Link}
                        to="/user/arts"
                    >
                        See My Arts
                    </Button>
                </Grid>
            </Grid>
        </Box>

    );
}

export default UserDetailView;
