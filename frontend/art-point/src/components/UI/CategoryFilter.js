import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CategoryFilter(props) {

    const filterHandler = (event, arts) => {
        // console.log(arts);
        props.onApplyingFilter(arts);
    }

    return (
        <Autocomplete
            multiple
            onChange={filterHandler}
            id="checkboxes-tags-demo"
            options={categories}
            disableCloseOnSelect
            getOptionLabel={(category) => category}
            renderOption={(props, category, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {category}
                </li>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
                // console.log(params)
                < TextField {...params} label="Filters" placeholder="Categories" />
            )
            }
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const categories = ['category1', 'category2', 'category3'];