import { Card, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

const ChatNotification = () => {

    const [chats, setChats] = useState([]);

    const userId = useSelector(state => state.auth.user.id);
    const token = useSelector(state => state.auth.token);

    useEffect(() => {
        const url = "http://localhost:8080/user/" + userId + "/notifications";
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

    return (
        <div>
            <Typography variant="h1">
                Notifications
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12 }}>
                {chats.map(chat => (
                    <Grid item xs={12} key={chat.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h3">
                                    {"sender: " + chat.sender.firstName}
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                    {"message: " + chat.message}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default ChatNotification;