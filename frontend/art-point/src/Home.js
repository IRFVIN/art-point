import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Home = () => {

    const [msg, setMsg] = useState('');


    useEffect(() => {
        const url = "http://localhost:8080";
        fetch(url).then(res => {
            return res.text();
        }).then(msg => {
            console.log(msg);
            setMsg(msg);
        })
    }, []);

    return (
        <Typography variant="h2" color="primary" gutterBottom>
            {msg}
            {/* {token} */}
        </Typography>
    );
}

export default Home;