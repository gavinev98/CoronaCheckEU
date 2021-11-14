
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
import LastUpdate from './components/LastUpdate/LastUpdate';
import moment from 'moment';




const App = () => {

     //state for storing covid data.
      const[covidData, setCovidData] = useState([]);
    //set state for data to be displayed
      const[c19Data, setc19Data] = useState([]);
     //state for storing state of error
      const[error, setError] = useState('');

          //convert date to correct format using moment js.
      const formattedDate = moment(covidData.Date).format('MMMM Do YYYY, h:mm:ss a');



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
        <LastUpdate lastUpdate={formattedDate} />
      <Grid container spacing={1}>
     {
       covidData.length != 0
       ?
     Object.entries(covidData).map(([key, value]) => {
 
       {return key !== 'Date' ? <Grid item xs={12} sm={6} md={3}> <CovidCard key={key} title={key} result={covidData[key]} /> </Grid> : <></>;

      }})
      :
      <Loader type="Puff" color="#00BFFF" height={100} width={100}/>
    }
      </Grid>
      <LastUpdate lastUpdate="Graphical View" />
      </Layout> 
    </div>
  );
};

export default App;

