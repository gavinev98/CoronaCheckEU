
import './App.css';

import React from 'react';
import Layout from './components/Layout/Layout';
import CovidCard from './components/CovidCards/CovidCard';



const App = () => {
  return (
    <div>

      <Layout >

      <CovidCard />

      </Layout>
      
    </div>
  );
};

export default App;

