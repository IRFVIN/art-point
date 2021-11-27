import ArtGridView from "./ArtGridView";
import { useEffect, useState } from "react";
import { Button, Container, IconButton, Input, InputAdornment, Pagination, TextField } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';

const ArtPageView = () => {
    const [arts, setArts] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

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

    console.log("heeeyeyey");

    useEffect(() => {
        let url = "http://localhost:8080/art?";
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
        <Container>
            <form onSubmit={handleSubmit}>
                <TextField variant="outlined" placeholder="Search by Title" onChange={handleSearchTitleChange}/>
            </form>

            <ArtGridView arts={arts} />
            <Pagination
                count={totalPages}
                size="large"
                onChange={handlePageChange}
            />
        </Container>
    );

}

export default ArtPageView;