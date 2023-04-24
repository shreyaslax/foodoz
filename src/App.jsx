import React, { useState } from 'react';
import Navbar from './Navbar';
import './App.css';
import Meals from './Meals';

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    const temp = [...cartItems];

    const presentItem = temp.find((i) => i.id === item.id);
    if (presentItem) {
      presentItem.quantity++;
      presentItem.totalPrice = presentItem.quantity * presentItem.price;
    } else {
      temp.push(item);
    }
    setCartItems(temp);
  }

  function removeFromCart(item) {
    const temp = [...cartItems];
    const remainingItems = [];

    if (item.quantity > 1) {
      const presentItem = temp.find((i) => i.id === item.id);
      presentItem.quantity--;
      presentItem.totalPrice = presentItem.quantity * presentItem.price;
      setCartItems(temp);
    } else {
      temp.map((i) => {
        if (item.id !== i.id) {
          remainingItems.push(i);
        }
      });

      setCartItems(remainingItems);
    }
  }

  return (
    <React.Fragment>
      <Navbar cartItems={cartItems} removeFromCart={removeFromCart} />
      <Meals addToCart={addToCart} />
    </React.Fragment>
  );
}

export default App;
