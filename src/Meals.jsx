import React from 'react';
import { Stack } from '@mui/system';
import Meal from './Meal';
import MEALS from './data';
import { Typography } from '@mui/material';

const Meals = (props) => {
  console.log(props);
  return (
    <>
      <Typography
        variant="h4"
        style={{
          fontWeight: 'bold',
          textAlign: 'center',
          margin: '20px 0px',
        }}
      >
        Food items Delivered at your Doorstep.
      </Typography>
      <Stack
        sx={{ margin: '20px' }}
        direction="row"
        gap={2}
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {MEALS.map((meal) => {
          return (
            <Meal
              key={meal.id}
              id={meal.id}
              image={meal.image}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              addToCart={props.addToCart}
            />
          );
        })}
      </Stack>
    </>
  );
};

export default Meals;
