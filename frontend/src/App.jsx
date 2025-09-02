import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderTracker from './components/OrderTracker';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

export default function App() {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    socket.on('orderCreated', (order) => {
      console.log('Order update:', order);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Umid Market</h1>
      {!order ? (
        <>
          <ProductList cart={cart} setCart={setCart} />
          <Cart cart={cart} setCart={setCart} setOrder={setOrder} />
        </>
      ) : (
        <>
          <Checkout order={order} />
          <OrderTracker order={order} />
        </>
      )}
    </div>
  );
}