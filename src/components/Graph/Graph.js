import React from 'react';
import { Line } from 'react-chartjs-2';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const Graph = () => {

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
        <div className='header'>
        <Autocomplete
            disablePortal
            id="countries"
            sx={{ width: 300, alignItems: 'center' }}
            renderInput={(params) => <TextField {...params} label="Countries" />}
        />

        </div>
        <Line data={data} options={options} />
        </>
    );
};

export default Graph;