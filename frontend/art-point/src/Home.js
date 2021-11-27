import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserGridView from "./components/user/views/UserGridView";

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
        <div>
            <Typography variant="h2" color="primary" gutterBottom>
                {msg}
                {/* {token} */}
            </Typography>

            {/* <Typography variant="h3"
                component={Link}
                to="/users"
            >
                All Sellers
            </Typography> */}
        </div>
    );
}

export default Home;