import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import ChatFormDialog from "./ChatFormDialog";

const ChatNotification = () => {

    const [chats, setChats] = useState([]);

    const user = useSelector(state => state.auth.user);

    // const userId = useSelector(state => state.auth.user.id);
    const token = useSelector(state => state.auth.token);

    useEffect(() => {
        if (!user)
            return;
        const url = "http://localhost:8080/user/" + user.id + "/notifications";
        fetch(url, {
            headers: {
                'Authorization': "Bearer " + token
            }
        }).then(res => {
            return res.json();
        }).then(res => {
            setChats(res);
        });
    }, []);

    if (!user) {
        return (
            <Navigate to="/" />
        );
    }
    return (
        <div>
            <Typography variant="h3">
                Notifications
            </Typography>
            <Typography>Messages from buyers, if any, show up here!</Typography>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12 }}>
                {chats.map(chat => (
                    <Grid item xs={12} key={chat.id}>
                        <Card>
                            <CardContent>
                                <Typography
                                    component={Link}
                                    to={"/user/" + chat.sender.id}
                                    variant="h5">
                                    {"sender: " + chat.sender.firstName}
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                    {"message: " + chat.message}
                                </Typography>

                                <Typography
                                    component={Link}
                                    to={"/art/" + chat.art.id}
                                    variant="h6" color="text.secondary">
                                    {"art: " + chat.art.title}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <ChatFormDialog
                                    receiver={chat.sender}
                                    art={chat.art}
                                    reply={true} />
                                {/* <Button variant="contained">Reply</Button> */}
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default ChatNotification;