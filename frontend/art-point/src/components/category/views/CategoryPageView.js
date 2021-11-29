// import ArtGridView from "./ArtGridView";
import ArtGridView from "../../art/views/ArtGridView";
import { useEffect, useState } from "react";
import { Button, Container, CssBaseline, IconButton, Input, InputAdornment, Pagination, TextField, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import CategoryFilter from "../../UI/CategoryFilter";
import FilterDrawer from "../../UI/FilterDrawer";
import { UmbrellaTwoTone } from "@mui/icons-material";
import { useParams } from "react-router";

const CategoryPageView = (props) => {
    const [arts, setArts] = useState(null);
    let params = useParams();

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [categoryName, setCategoryName] = useState("");


    const handlePageChange = (e, p) => {
        console.log(p);
        setCurrentPage(p);
    }



    useEffect(() => {
        // let url = props.baseURL + `&page=${currentPage - 1}`;
        let url = "http://localhost:8080/category/" + params.categoryId + "/arts" + `?page=${currentPage - 1}`;

        fetch(url).then(res => {
            return res.json();
        }).then(res => {
            setArts(res.art);
            setTotalPages(res.totalPages);
            setCategoryName(res.categoryName);
            // setCategories(res.categories);
        })


    }, [currentPage]);


    if (!arts) {
        return <div>loading arts</div>
    }
    return (
        <Box sx={{ display: 'flex' }}>
            {/* <CssBaseline /> */}


            <Box>
                <Typography variant="h2">Category: {categoryName}</Typography>
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

export default CategoryPageView;