import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

export default function ProductList({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/products').then(res => setProducts(res.data));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map(p => (
        <ProductCard key={p._id} product={p} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
}