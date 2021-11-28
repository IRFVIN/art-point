import ArtGridView from "./ArtGridView";
import { useEffect, useState } from "react";
import { Button, Container, CssBaseline, IconButton, Input, InputAdornment, Pagination, TextField, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import CategoryFilter from "../../UI/CategoryFilter";
import FilterDrawer from "../../UI/FilterDrawer";

const ArtPageView = (props) => {
    const [arts, setArts] = useState(null);
    const [searchTitle, setSearchTitle] = useState("");
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);
    const [minPriceSlider, setMinPriceSlider] = useState(null);
    const [maxPriceSlider, setMaxpriceSlider] = useState(null);
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

    console.log("heeeyeyey");

    useEffect(() => {
        let url = props.baseURL + `&page=${currentPage - 1}`;

        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                categoryList: categoryListFilter,
                searchTitle: searchTitle,
                minPrice: minPrice,
                maxPrice: maxPrice
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
        })


    }, [searchTitle, currentPage, categoryListFilter, minPrice, maxPrice]);

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

    if (!arts || !categories) {
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
                <FilterDrawer categoryListFilter={categoryListFilter} categories={categories} onCheck={onSelectCategory} />
            </Box>
        </Box>
    );

}

export default ArtPageView;