import React from 'react';
import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import { Menu } from '@mui/material';


import * as covidAPI from '../../api/covidData';



const Graph = (props) => {


    //creating state to store country selected.
    const[country, setCountrySelected] = useState('');
    //creating state to store covid data for specific country.
    const[countryData, setCountryData] = useState([]);
    //state for storing state of error
    const[error, setError] = useState('');


    //date to retrieve latest covid stats daily
    var today = new Date();
    //need to format the time setting so that api correctly retrieve specific data.
    today.setHours(0,0,0,0)
    //parsing date to json for api call
    var todayToJson = today.toJSON();
    //getting yesterdays date,
    var yesterday = new Date((new Date() - 86400000));
    //need to format yesterdays time setting so that api can correctly retrieve specific data
    yesterday.setHours(0,0,0,0);
    //parsing date to json for api call.
    var yesterdayToJson = yesterday.toJSON()

   

    //run api function when the country state changes to retrieve info.
    useEffect(() => {
      //execute api function to retrieve details of country.
      covidAPI.covidCountry(country, yesterdayToJson, todayToJson).then(res => {
        setCountryData(res.data);
      }).catch(error => setError(error));
    }, [country]);


    //handle state to setCountry to one selected.
    const handleChange = (event) => {
      //set coutnry selected to dropdown value
      setCountrySelected(event.target.value);
    }

    //valid list of countries to display in dropdown.
    const validCountries = props.countries.map((place) =>    
    <MenuItem key={place.Country} value={place.Country} children={place.Country}></MenuItem> 
  );

    //using x axis to display range of dates for the last 7 days.
    let start = new Date(),
    end = new Date();

    start.setDate(start.getDate() - 7); // set to 'now' minus 7 days.
    start.setHours(0, 0, 0, 0); // set to midnight.
  

    const data = {
        datasets: [
          {
            label: 'Cases',
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
          },
          x: [{
            type: 'time',
            time : {
              min: start,
              max: end,
              unit: 'day'
            }
          }]
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
        {validCountries}
        </Select>
      </FormControl>

        <Line data={data} options={options} />
        </>
    );
};

export default Graph;