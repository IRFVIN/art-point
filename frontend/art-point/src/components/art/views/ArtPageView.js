import ArtGridView from "./ArtGridView";
import { useEffect, useState } from "react";
import { Button, Container, CssBaseline, IconButton, Input, InputAdornment, Pagination, TextField, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import CategoryFilter from "../../UI/CategoryFilter";
import FilterDrawer from "../../UI/FilterDrawer";

const ArtPageView = (props) => {
    const [arts, setArts] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    // const [mobileOpen, setMobileOpen] = React.useState(false);

    // const handleDrawerToggle = () => {
    //     setMobileOpen(!mobileOpen);
    // };

    const handlePageChange = (e, p) => {
        console.log(p);
        setCurrentPage(p);
    }

    const handleSearchTitleChange = (e) => {
        const newSearchTitle = e.target.value;
        console.log(newSearchTitle);
        setSearchTitle(newSearchTitle);
    }

    const handleSubmit = (e) => {
        console.log(e);
    }

    const onApplyingFilter = (arts) => {
        console.log(arts);
        // setArts(arts);
    }

    console.log("heeeyeyey");

    useEffect(() => {
        let url = props.baseURL;
        if (searchTitle != "") url += `title=${searchTitle}`;
        url += `&page=${currentPage - 1}`;

        fetch(url).then(res => {
            return res.json();
        }).then(res => {
            setArts(res.art);
            setTotalPages(res.totalPages);
        });
    }, [searchTitle, currentPage]);

    return (
        <Box sx={{ display: 'flex' }}>
            {/* <CssBaseline /> */}

            <Box>
                {/* <FilterDrawer /> */}
                {/* <div> */}
                <form onSubmit={handleSubmit}>
                    <TextField fullWidth variant="outlined" placeholder="Search by Title" onChange={handleSearchTitleChange} />
                </form>
                {/* <Toolbar /> */}

                {/* <CategoryFilter onApplyingFilter={onApplyingFilter} /> */}
                {/* </div> */}

                <ArtGridView arts={arts} />
                <Pagination
                    count={totalPages}
                    size="large"
                    onChange={handlePageChange}
                />
            </Box>
            <Box>
                <FilterDrawer />
            </Box>
        </Box>
    );

}

export default ArtPageView;