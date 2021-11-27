import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const AccountSettings = () => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    if (!isLoggedIn) {
        return (
            <Navigate to="/" />
        );
    }
    return (<div>
        <Typography variant="h1">Settings</Typography>
    </div>);
}

export default AccountSettings;