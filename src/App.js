
import './App.css';

import React from 'react';
import Layout from './components/Layout/Layout';
import CovidCard from './components/CovidCards/CovidCard';
import Grid from '@mui/material/Grid';
import Loader from "react-loader-spinner";

//importing api 
import * as covidAPI from './api/covidData';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';



const App = () => {

     //state for storing covid data.
      const[covidData, setCovidData] = useState([]);
     //state for storing state of error
      const[error, setError] = useState('');


    useEffect(() => {
      const interval = setInterval(() => { 
        covidAPI.covidInfections().then(res =>{
        setCovidData(res.data.Global)
    }).catch(error => setError(error))}, 15000);

    return () => clearInterval(interval);
    
    });



  return (
    <div>

      <Layout >
      <Box sx={{ width: '100%' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
     
     {
       covidData.length != 0
       ?
     Object.entries(covidData).map(([key, value]) => {

       return  <Grid item xs={2} sm={4} md={4}> <CovidCard key={key} title={key} result={covidData[key]} />  </Grid>

      })
      :
      <Loader type="Puff" color="#00BFFF" height={100} width={100}/>
    }
      </Grid>
      </Box>
      </Layout>
    </div>
  );
};

export default App;

