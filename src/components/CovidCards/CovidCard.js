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

import useStyles from './CovidCardStyles.js';




const CovidCard = () => {

   const classes = useStyles();


    return (
  <Card style={{ width: 200, height: 200}}>
      <CardContent>
        <Typography  className={classes.customTypographyH1} gutterBottom>
          Infections
        </Typography>
        <Avatar sx={{ bgcolor: pink[500] }}>
          <PageviewIcon />
         </Avatar>
        <Typography sx={{ mb: 1.5, textAlign: 'center' }} color="text.secondary">
          1000
        </Typography>
        <Typography variant="body2" style={{textAlign: 'center'}}>
          Last Update : 14:30
          <br />
        </Typography>
      </CardContent>

    </Card>
    );
};

export default CovidCard;