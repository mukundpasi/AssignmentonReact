import React from 'react';

function Product({ product }) {
  const { title, price, image } = product;

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">${price}</p>
    </div>
  );
}

export default Product;
