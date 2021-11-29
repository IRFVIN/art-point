import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import CategoryCardView from '../category/views/CategoryCardView';
import CarouselItem from './CarouselItem';

function FeaturedArtsCarousel(props) {

    const [arts, setArts] = useState(null);

    useEffect(() => {
        let url = "http://localhost:8080/art";

        fetch(url).then(res => res.json()).then(res => {
            setArts(res.art);
        })

    }, []);

    if (!arts) {
        return <div>loading</div>;
    }

    return (
        <Carousel
        >
            {
                arts.map(art => <CarouselItem key={art.id} art={art} />)
                // items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default FeaturedArtsCarousel;