
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
import { makeStyles } from "@material-ui/core/styles";



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

    const useStyles = makeStyles((theme) => ({
      container: {
        display: "flex"
      },
      item: {
        border: "1px solid blue",
        flexBasis: "33%",
        maxWidth: "33%"
      },
      itemFlexGrow: {
        flexGrow: 0,
        border: "1px solid red"
      }
    }));

    const classes = useStyles();

  return (
    <div>

      <Layout >
      <Grid container spacing={1}>
     {
       covidData.length != 0
       ?
     Object.entries(covidData).map(([key, value]) => {

       return <Grid item xs={12} sm={6} md={3}> <CovidCard key={key} title={key} result={covidData[key]} /> </Grid>

      })
      :
      <Loader type="Puff" color="#00BFFF" height={100} width={100}/>
    }
      </Grid>
      </Layout> 
    </div>
  );
};

export default App;

