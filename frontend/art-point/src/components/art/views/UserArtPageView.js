import ArtGridView from "./ArtGridView";
import { useEffect, useState } from "react";
import { Button, Container, CssBaseline, IconButton, Input, InputAdornment, Pagination, TextField, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import CategoryFilter from "../../UI/CategoryFilter";
import FilterDrawer from "../../UI/FilterDrawer";

const UserArtPageView = (props) => {
    const [arts, setArts] = useState(null);


    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);



    const handlePageChange = (e, p) => {
        console.log(p);
        setCurrentPage(p);
    }


    useEffect(() => {
        let url = props.baseURL + `&page=${currentPage - 1}`;

        fetch(url, {
        }).then(res => {
            return res.json();
        }).then(res => {
            setArts(res.art);
            setTotalPages(res.totalPages);
        })


    }, [currentPage]);



    if (!arts) {
        return <div>loading arts</div>
    }
    return (
        <Box sx={{ display: 'flex' }}>
            {/* <CssBaseline /> */}

            <Box>

                <ArtGridView arts={arts} />
                <Pagination
                    count={totalPages}
                    size="large"
                    onChange={handlePageChange}
                />
            </Box>
        </Box>
    );

}

export default UserArtPageView;