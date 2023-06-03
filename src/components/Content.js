import React from 'react';
import Product from './Product';

function Content() {
  const products = [
    {
      id: 1,
      title: 'Product 1',
      price: 10,
      image: 'https://dummyimage.com/300x200/ccc/000&text=Product+1',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 20,
      image: 'https://dummyimage.com/300x200/ccc/000&text=Product+2',
    },
    {
      id: 3,
      title: 'Product 3',
      price: 30,
      image: 'https://dummyimage.com/300x200/ccc/000&text=Product+3',
    },
  ];

  return (
    <div>
      <h2>Product Catalog</h2>
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Content;
