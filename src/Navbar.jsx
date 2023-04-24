import { useState } from 'react';
import { Box } from '@mui/system';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import { Button, Card, CardMedia } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { Badge } from '@mui/material';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from '@mui/material';
import CartItem from './CartItem';

const Navbar = (props) => {
  const [open, setOpen] = useState(false);

  let totalPrice = 0;
  props.cartItems.map((item) => {
    totalPrice += item.totalPrice;
  });

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  console.log(props);
  return (
    <Box sx={{ minHeight: '10vh', backgroundColor: '#3f98e8' }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography
          variant="h4"
          style={{ padding: '20px', fontWeight: 'bold' }}
        >
          FooDooZ
        </Typography>
        <Button
          sx={{ padding: '10px', color: '#fff', marginRight: '10px' }}
          onClick={handleOpen}
        >
          <Badge color="secondary" badgeContent={props.cartItems.length}>
            <ShoppingCartIcon sx={{ color: '#fff', fontSize: '40px' }} />
          </Badge>
        </Button>
      </Stack>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <Stack direction="row" justifyContent="space-between">
          <DialogTitle>Your Cart</DialogTitle>
          <DialogActions>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </DialogActions>
        </Stack>
        <DialogContent>
          <Stack gap={2}>
            {props.cartItems.map((item) => {
              return (
                <CartItem item={item} removeFromCart={props.removeFromCart} />
              );
            })}
            <Typography
              style={{
                color: '#24c148',
                fontWeight: 'bold',
                fontSize: '15px',
                alignSelf: 'flex-end',
              }}
            >
              Total Amount: Rs. {totalPrice}
            </Typography>
          </Stack>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Navbar;
