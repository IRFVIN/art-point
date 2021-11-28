
import { useEffect, useState } from "react";
import { Button, Container, CssBaseline, IconButton, Input, InputAdornment, Pagination, TextField, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import UserGridView from "../user/views/UserGridView";


const SellerPageView = (props) => {
    const [sellers, setSellers] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);



    const handlePageChange = (e, p) => {
        console.log(p);
        setCurrentPage(p);
    }





    useEffect(() => {
        let url = props.baseURL;

        fetch(url).then(res => {
            return res.json();
        }).then(res => {
            setSellers(res.sellers);
            setTotalPages(res.totalPages);
        });
    }, [currentPage]);

    return (



        <div>
            <UserGridView users={sellers} />
            <Pagination
                count={totalPages}
                size="large"
                onChange={handlePageChange}
            />
        </div>

    );

}

export default SellerPageView;