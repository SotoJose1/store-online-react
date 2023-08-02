import React, { useState } from 'react';
import './App.css';
import ProductList from './components/productList';
import Cart from './components/cart';

const App = () => {
  // Ejemplo de datos de productos
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 10.99, image: 'producto1.jpg' },
    { id: 2, name: 'Product 2', price: 5.99, image: 'producto2.jpg' },
    { id: 3, name: 'Product 3', price: 8.99, image: 'producto3.jpg' },
  ]);

  // Estado del carrito de compras
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="app">
      <h1>Tienda Online</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
