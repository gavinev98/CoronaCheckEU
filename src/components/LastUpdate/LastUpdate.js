import React from 'react';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';




const LastUpdate = (props) => {



    return (
        <Container maxWidth="lg" style={{paddingBottom: '2%'}}>
        <Typography variant="h3" style={{textAlign: 'center', verticalAlign: 'middle'}}>{props.lastUpdate}</Typography>
        </Container>

    );
};

export default LastUpdate;