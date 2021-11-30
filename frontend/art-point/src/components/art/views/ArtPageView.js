import ArtGridView from "./ArtGridView";
import { useEffect, useState } from "react";
import { Pagination, TextField } from "@mui/material";
import { Box } from "@mui/system";
import FilterDrawer from "../../UI/FilterDrawer";

const ArtPageView = (props) => {
    const [arts, setArts] = useState(null);
    const [searchTitle, setSearchTitle] = useState("");
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);
    const [minPriceSlider, setMinPriceSlider] = useState(null);
    const [maxPriceSlider, setMaxPriceSlider] = useState(null);
    const [filterByPriceRange, setFilterByPriceRange] = useState(null);
    const [categoryListFilter, setCategoryListFilter] = useState([]);
    const [categories, setCategories] = useState(null);

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

    const onSelectCategory = (categoryFilters) => {
        setCategoryListFilter(categoryFilters)
    }

    const onPriceRange = (priceRange) => {
        setMinPriceSlider(priceRange[0]);
        setMaxPriceSlider(priceRange[1]);
        console.log("From ArtPage: " + priceRange);
    }

    console.log("heeeyeyey");

    useEffect(() => {
        let url = props.baseURL + `&page=${currentPage - 1}`;

        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                categoryList: categoryListFilter,
                searchTitle: searchTitle,
                minPrice: minPriceSlider,
                maxPrice: maxPriceSlider
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).then(res => {
            setArts(res.art);
            setTotalPages(res.totalPages);
            setCategories(res.categories);
            setMinPrice(res.minPrice);
            setMaxPrice(res.maxPrice);

            if (!minPriceSlider || !maxPriceSlider) {
                setMinPriceSlider(res.minPrice);
                setMaxPriceSlider(res.maxPrice);
            }
        })


    }, [searchTitle, currentPage, categoryListFilter, minPriceSlider, maxPriceSlider]);

    // useEffect(() => {
    //     let url = props.baseURL;
    //     if (searchTitle != "") url += `title=${searchTitle}`;
    //     url += `&page=${currentPage - 1}`;

    //     fetch(url).then(res => {
    //         return res.json();
    //     }).then(res => {
    //         setArts(res.art);
    //         setTotalPages(res.totalPages);
    //     });
    // }, [searchTitle, currentPage]);

    if (!arts || !categories || !minPriceSlider || !maxPriceSlider) {
        return <div>loading arts</div>
    }
    return (
        <Box sx={{ display: 'flex' }}>
            {/* <CssBaseline /> */}

            <Box>
                {/* <FilterDrawer /> */}
                {/* <div> */}
                <form onSubmit={handleSubmit}>
                    <TextField fullWidth variant="outlined" placeholder="Search by Title" onChange={handleSearchTitleChange} />
                </form>
                <br/>
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
                <FilterDrawer
                    actualPriceRange={[minPrice, maxPrice]}
                    range={[minPriceSlider, maxPriceSlider]}
                    categoryListFilter={categoryListFilter}
                    categories={categories} onCheck={onSelectCategory}
                    onPriceRange={onPriceRange}
                />
            </Box>
        </Box>
    );

}

export default ArtPageView;