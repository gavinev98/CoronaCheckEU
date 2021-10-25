import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PageviewIcon from '@mui/icons-material/Pageview';
import { green, pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import useStyles from './CovidCardStyles.js';




const CovidCard = ({ globalStats }) => {

   const classes = useStyles();


    return (
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={6}>
  <Card style={{ width: 200, height: 200}}>
      <CardContent>
        <Typography  className={classes.customTypographyH1} gutterBottom>
          Random Text
        </Typography>
        <Avatar sx={{ bgcolor: pink[500] }}>
          <PageviewIcon />
         </Avatar>
        <Typography sx={{ mb: 1.5, textAlign: 'center' }} color="text.secondary">
     
        </Typography>
        <Typography variant="body2" style={{textAlign: 'center'}}>
          Last Update : 14:30
          <br />
        </Typography>
      </CardContent>

    </Card>
    </Grid>
    </Grid>
    );
};

export default CovidCard;