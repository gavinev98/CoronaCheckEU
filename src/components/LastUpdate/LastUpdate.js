import React from 'react';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import moment from 'moment';



const LastUpdate = (props) => {

    //convert date to correct format using moment js.
    const formattedDate = moment(props.lastUpdate).format('MMMM Do YYYY, h:mm:ss a');

    return (
        <Container maxWidth="sm">
        <Typography variant="h1">{formattedDate}</Typography>
        </Container>

    );
};

export default LastUpdate;