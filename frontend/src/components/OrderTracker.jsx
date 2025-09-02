import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
const socket = io('http://localhost:5000');

export default function OrderTracker({ order }) {
  const [status, setStatus] = useState(order.status);
  useEffect(() => {
    socket.on('orderCreated', (updated) => {
      if (updated._id === order._id) setStatus(updated.status);
    });
  }, [order._id]);
  return <p>Buyurtma holati: {status}</p>;
}