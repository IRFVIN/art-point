import { ListItem, TextField } from "@mui/material";

const TitleSearchBar = () => {

    const handleSearchTitleChange = (event) => {

    }

    return <ListItem>
        <TextField
            variant="outlined"
            placeholder="Search by Title"
            onChange={handleSearchTitleChange} />
    </ListItem>

}

export default TitleSearchBar;