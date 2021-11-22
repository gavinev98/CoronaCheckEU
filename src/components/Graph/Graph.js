import React from 'react';
import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import { Menu } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

import { Chart } from "react-google-charts";


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
    var yesterday = new Date(new Date().setDate(new Date().getDate() - 5));
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



      <Chart
  width={'600px'}
  height={'400px'}
  chartType="Line"
  loader={<div>Loading Chart</div>}
  data={[
    [
      'Day',
      'Cases',
    ],
    [1, countryData.Cases,],
  ]}
  options={{
    chart: {
      title: 'Current Selected country is: ' + `${country}`,
      subtitle: '',
    },
  }}
  rootProps={{ 'data-testid': '3' }}
/>


        </>
    );
};

export default Graph;