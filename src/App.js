
import './App.css';

import React from 'react';
import Layout from './components/Layout/Layout';
import CovidCard from './components/CovidCards/CovidCard';
import Grid from '@mui/material/Grid';
import Loader from "react-loader-spinner";

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
     {
       covidData.length != 0
       ?
     Object.entries(covidData).map(([key, value]) => {

       return <CovidCard key={key} title={key} result={covidData[key]} />
       
      })
      :
      <Loader type="Puff" color="#00BFFF" height={100} width={100}/>
    }
      </Grid>
      </Grid>
      </Layout>
    </div>
  );
};

export default App;

