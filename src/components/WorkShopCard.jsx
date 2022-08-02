import React from 'react';
import { Grid, Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';

const styles = theme => ({
    Card: {
      width: 300,
      margin: 'auto'
    },
    Media: {
      height: 550,
      width: '100%',
      objectFit: 'cover'
    }
  });

export default function WorkShopCard(props) {
    return (
          <div style={{"padding-left": 100, "padding-right": 100}}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                className={styles.Media}
                component="img"
                image={props.image}
                height="140"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {props.header}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {props.description}
                </Typography>
              </CardContent>
            </Card>
        </div>
    )
}