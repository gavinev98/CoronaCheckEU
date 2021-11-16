import React from 'react';
import { useState } from 'react'
import { Line } from 'react-chartjs-2';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import { Menu } from '@mui/material';



const Graph = (props) => {


    //creating state to store country selected.
    const[country, setCountrySelected] = useState('');


    //handle state to setCountry to one selected.
    const handleChange = (event) => {
      //set coutnry selected to dropdown value
      setCountrySelected(event.target.value);
    }


    const countriesFormatted = Object.entries(props.countries).map((key, value) => {
      return (
       key == 'Country' ? <MenuItem key={value} value={value} children={value}></MenuItem> : []
      );
    });




    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      };

      const options = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };


    return (
        <>
      <FormControl fullWidth>
        <InputLabel id="countryLabel">Country</InputLabel>
        <Select
          labelId="CountrySelected"
          id="country"
          value={country}
          label="Country"
          onChange={handleChange}
        >
        {countriesFormatted}
        </Select>
      </FormControl>

        <Line data={data} options={options} />
        </>
    );
};

export default Graph;