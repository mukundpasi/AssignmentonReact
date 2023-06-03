import React from 'react';
import { Link } from 'react-router-dom';

function Card() {
  // Sample data for the products in the cart
  const cartProducts = [
    { id: 1, title: 'Product 1', price: 10 },
    { id: 2, title: 'Product 2', price: 20 },
    { id: 3, title: 'Product 3', price: 30 },
  ];

  return (
    <div>
      <h2>Cart</h2>
      {cartProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartProducts.map((product) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
            </div>
          ))}
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Card;
