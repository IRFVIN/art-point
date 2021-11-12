import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import ArtItem from "./ArtItem";

const DisplayArtItems = () => {

    const [arts, setArts] = useState([]);

    useEffect(() => {
        const url = "http://localhost:8080/art";
        fetch(url).then(res => {
            return res.json();
        }).then(res => {
            setArts(res);
        });
    }, []);

    // console.log(arts.length);

    return <Container>
        {arts.map(art =>
            <ArtItem key={art.id} art={art} />
        )}
    </Container>
}

export default DisplayArtItems;