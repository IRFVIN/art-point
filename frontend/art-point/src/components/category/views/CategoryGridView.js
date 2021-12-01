import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CategoryCardView from "./CategoryCardView";

const CategoryGridView = () => {

    const [categories, setCategories] = useState(null);

    useEffect(() => {
        let url = "http://localhost:8080/categories";

        fetch(url).then(res => res.json()).then(res => {
            setCategories(res);
        })

    }, []);

    if (!categories) {
        return <div>loading</div>;
    }

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {categories.map(category => (
                <Grid item xs={2} sm={4} md={4} key={category.id}>
                    <CategoryCardView key={category.id} category={category} />
                </Grid>
            ))}
        </Grid>
    );
}

export default CategoryGridView;
