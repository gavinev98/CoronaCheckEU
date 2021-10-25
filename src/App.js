
import './App.css';

import React from 'react';
import Layout from './components/Layout/Layout';
import CovidCard from './components/CovidCards/CovidCard';

//importing api 
import * as covidAPI from './api/covidData';
import { useState, useEffect } from 'react';



const App = () => {

     //state for storing covid data.
     const[covidData, setCovidData] = useState({});

     //state for storing state of error
    const[error, setError] = useState('');


      
    useEffect(() => {

      const interval = setInterval(() => { 
        covidAPI.covidInfections().then(res =>{
        setCovidData(res.data)
    }).catch(error => setError(error))}, 15000);

    return () => clearInterval(interval);
    
    });




  return (
    <div>

      <Layout >

      <CovidCard globalStats={covidData} />

      </Layout>
      
    </div>
  );
};

export default App;

