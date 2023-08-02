import React from 'react';


const Product = ({ name, price, Image }) => {
  return (
    <div className="product">
      <img src={Image} alt={name} />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
