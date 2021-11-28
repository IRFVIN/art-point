import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function PriceFilter() {
    const pricesOption = ["All prices", "Under 1000", "1000-5000"]
    const [value, setValue] = React.useState(pricesOption[0]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    return (
        <FormControl component="fieldset">
            <RadioGroup
                aria-label="prices"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                {pricesOption.map(option => <FormControlLabel
                    value={option}
                    control={<Radio />}
                    label={option}
                />)}

                {/* <FormControlLabel value="All prices" control={<Radio />} label="All prices" />
                <FormControlLabel value="Under 1000" control={<Radio />} label="Male" /> */}
            </RadioGroup>
        </FormControl>
    );
}
