import React from 'react';
export default function Checkout({ order }) {
  return (
    <div>
      <h2 className="text-xl">Buyurtma qabul qilindi</h2>
      <p>ID: {order._id}</p>
      <p>Status: {order.status}</p>
    </div>
  );
}