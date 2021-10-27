
import './App.css';

import React from 'react';
import Layout from './components/Layout/Layout';
import CovidCard from './components/CovidCards/CovidCard';
import Grid from '@mui/material/Grid';

//importing api 
import * as covidAPI from './api/covidData';
import { useState, useEffect } from 'react';



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

      <Grid container spacing={1}>
      <Grid container item spacing={3}>
      <CovidCard globalStats={covidData} />
      </Grid>
      </Grid>

      </Layout>
      
    </div>
  );
};

export default App;

