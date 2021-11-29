import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Divider, TextField } from "@mui/material";

function valuetext(value) {
    return `${value}°C`;
}

const minDistance = 0;

export default function PriceFilter(props) {
    const [value1, setValue1] = React.useState(props.range);
    const [minValue, setMinValue] = React.useState(props.range[0]);
    const [maxValue, setMaxValue] = React.useState(props.range[1]);
    // console.log("rangeValue " + value1);

    React.useEffect(() => {
        props.onPriceRangeChange(value1);
    }, [value1]);

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setMinValue(newValue[0]);
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setMaxValue(newValue[1]);
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }

        // setMinValue(value1[0]);
        // setMaxValue(value1[1]);

        // props.onPriceRangeChange(value1);
    };

    const handleInputChange1 = (event) => {
        console.log(event.target.value);
        let val = event.target.value;
        if (val !== "") {
            val = parseInt(val);
            setMinValue(val);

            setValue1([val, value1[1]]);

            // props.onPriceRangeChange(value1);
        }
    }

    const handleInputChange2 = (event) => {
        console.log(event.target.value);
        let val = event.target.value;
        if (val !== "") {
            val = parseInt(val);
            setMaxValue(val);
            if (val < value1[0])
                return;

            // if (val < value1[0]) {
            //     setMaxValue(value1[0]);
            //     setValue1([value1[0], value1[0]]);
            //     return;
            // }

            if (val > props.actualPriceRange[1]) {
                // setMaxValue(props.range[1]);
                setValue1([value1[0], props.range[1]]);
                props.onPriceRangeChange(value1);
                return;
            }

            setValue1([value1[0], val]);
            // props.onPriceRangeChange(value1);
        }
    }

    // const [value2, setValue2] = React.useState([20, 37]);

    // const handleChange2 = (event, newValue, activeThumb) => {
    //     if (!Array.isArray(newValue)) {
    //         return;
    //     }

    //     if (newValue[1] - newValue[0] < minDistance) {
    //         if (activeThumb === 0) {
    //             const clamped = Math.min(newValue[0], 100 - minDistance);
    //             setValue2([clamped, clamped + minDistance]);
    //         } else {
    //             const clamped = Math.max(newValue[1], minDistance);
    //             setValue2([clamped - minDistance, clamped]);
    //         }
    //     } else {
    //         setValue2(newValue);
    //     }
    // };

    return (
        <Box sx={{ width: 300 }}>
            <TextField
                size="small"
                value={minValue}
                onChange={handleInputChange1}
                variant="outlined" />
            {/* <br /><br /> */}
            <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={value1}
                onChange={handleChange1}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={0}
                max={props.actualPriceRange[1]}
                // valueLabelDisplay="on"
                disableSwap
            />
            <TextField
                size="small"
                value={maxValue}
                onChange={handleInputChange2}
                variant="outlined" />
            {/* <Slider
                getAriaLabel={() => 'Minimum distance shift'}
                value={value2}
                onChange={handleChange2}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
            /> */}
        </Box>
    );
}
