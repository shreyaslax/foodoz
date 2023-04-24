import React from 'react';
import { Card, CardMedia, CardContent, CardActions } from '@mui/material';
import MEALS from './data';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const Meal = (props) => {
  function addItem() {
    const item = {
      id: props.id,
      image: props.image,
      name: props.name,
      price: props.price,
      quantity: 1,
      totalPrice: props.price,
    };
    props.addToCart(item);
  }
  return (
    <Card sx={{ minWidth: 320 }}>
      <CardMedia sx={{ height: 200 }} image={props.image} />
      <CardContent>
        <Typography variant="h5" style={{ fontWeight: 'bold' }}>
          {props.name}
        </Typography>
        <Typography variant="subtitle1">{props.description}</Typography>
        <Typography
          variant="h6"
          style={{ color: '#24c148', fontWeight: 'bold' }}
        >
          Rs. {props.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          startIcon={<ControlPointIcon />}
          variant="contained"
          sx={{ backgroundColor: '#3f98e8', textTransform: 'none' }}
          onClick={addItem}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Meal;
