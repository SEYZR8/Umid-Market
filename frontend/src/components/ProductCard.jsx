import React from 'react';

export default function ProductCard({ product, cart, setCart }) {
  const addToCart = () => {
    setCart([...cart, product]);
  };
  return (
    <div className="border p-2 rounded shadow">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
      <h2 className="font-semibold">{product.name}</h2>
      <p>{product.price} so'm</p>
      <button onClick={addToCart} className="bg-green-500 text-white px-2 py-1 rounded">Savatga qo'shish</button>
    </div>
  );
}