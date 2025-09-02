import React from 'react';
import axios from 'axios';

export default function Cart({ cart, setCart, setOrder }) {
  const checkout = async () => {
    const res = await axios.post('http://localhost:5000/api/orders', {
      items: cart.map(c => ({ productId: c._id, quantity: 1 })),
      address: 'Test manzil'
    });
    setOrder(res.data);
  };
  return (
    <div className="mt-4">
      <h2 className="text-xl">Savat</h2>
      {cart.map((c, i) => <p key={i}>{c.name}</p>)}
      <button onClick={checkout} className="bg-blue-500 text-white px-2 py-1 rounded">Buyurtma berish</button>
    </div>
  );
}