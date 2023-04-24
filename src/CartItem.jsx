import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { Button } from '@mui/material';

const CartItem = ({ item, removeFromCart }) => {
  function removeItem() {
    removeFromCart(item);
  }

  return (
    <Card sx={{ width: { xs: 280, sm: 550 } }}>
      <Stack direction="row">
        <CardMedia
          sx={{ width: '100px', height: '100px' }}
          image={item.image}
        />
        <CardContent sx={{ width: { xs: 200, sm: 500 } }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              style={{
                fontWeight: 'bold',
                fontSize: { xs: '10px', sm: '20px' },
              }}
            >
              {item.name}
            </Typography>
            <Typography
              style={{ color: '#24c148', fontWeight: 'bold', fontSize: '15px' }}
            >
              Rs. {item.totalPrice}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography sx={{ fontWeight: 'bold' }}>
              {' '}
              Quantity: {item.quantity}
            </Typography>
            <Button
              variant="contained"
              sx={{ textTransform: 'none', fontSize: '15px', padding: '5px' }}
              onClick={removeItem}
            >
              Remove
            </Button>
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default CartItem;
