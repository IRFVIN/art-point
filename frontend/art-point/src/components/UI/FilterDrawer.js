import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CategoryIcon from '@mui/icons-material/Category';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Checkbox, ListItemButton } from '@mui/material';
import PriceFilter from './PriceFilter';
import PriceChangeIcon from '@mui/icons-material/PriceChange';

const drawerWidth = 200;

function FilterDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // const [checked, setChecked] = React.useState([]);
    const [checked, setChecked] = React.useState(props.categoryListFilter);
    // const categories = ['category1', 'category2', 'category3', 'category4'];

    const getIndexOf = (cat) => {
        return checked.map(category => category.id).indexOf(cat.id);
    }

    const handleToggle = (value) => () => {
        // const currentIndex = checked.indexOf(value);
        const currentIndex = getIndexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        console.log(newChecked);
        props.onCheck(newChecked);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>

                <ListItem
                >
                    <ListItemIcon>
                        <FilterAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Filter by" />
                </ListItem>
                {/* <TitleSearchBar /> */}
            </List>

            <Divider />
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemIcon> <CategoryIcon /> </ListItemIcon>
                    <ListItemText primary="Category" />
                </ListItem>
                <Divider />
                {props.categories.map((category) => {
                    const labelId = `checkbox-list-label-${category.name}`;

                    return (
                        <ListItem
                            key={category.id}
                            disablePadding
                        >
                            <ListItemButton role={undefined} onClick={handleToggle(category)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={getIndexOf(category) !== -1}
                                        // checked={getIndexOf(category) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={category.name} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
            <Divider />
            <List>
                <ListItem>
                    <ListItemIcon> <PriceChangeIcon /> </ListItemIcon>
                    <ListItemText primary="Price range" />
                </ListItem>

                <Divider />

                <ListItem>
                    <PriceFilter
                        actualPriceRange={props.actualPriceRange}
                        range={props.range}
                        onPriceRangeChange={props.onPriceRange}
                    />
                </ListItem>

            </List>



        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    if (!props.categories)
        return <div>Loading categories, please wait...</div>;
    return (<Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
    >
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
        >
            <MenuIcon />
        </IconButton>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
            anchor="right"
            // container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
        >
            {drawer}
        </Drawer>
        <Drawer
            anchor="right"
            variant="permanent"
            sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
        >
            {drawer}
        </Drawer>
    </Box>);
}

FilterDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default FilterDrawer;
