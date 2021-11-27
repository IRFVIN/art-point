import ArtGridView from "./ArtGridView";
import { useEffect, useState } from "react";
import { Container, Pagination } from "@mui/material";

const ArtPageView = () => {
    const [arts, setArts] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const handleChange = (e, p) => {
        console.log(p);
        setCurrentPage(p);
    }

    console.log("heeeyeyey");

    useEffect(() => {
        const url = `http://localhost:8080/art?page=${currentPage - 1}`;
        fetch(url).then(res => {
            return res.json();
        }).then(res => {
            setArts(res.art);
            setTotalPages(res.totalPages);
        });
    }, [currentPage]);

    return (
        <Container>
            <ArtGridView arts={arts} />
            <Pagination
                count={totalPages}
                size="large"
                onChange={handleChange}
            />
        </Container>
    );

}

export default ArtPageView;