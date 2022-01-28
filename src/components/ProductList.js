import React from 'react';
import ListProduct from './ListProduct';
const ProductList = ({ products }) => {
  return (
    <div className="flex-col">
      {products.map(product => (
        <ListProduct product={product}/>
      ))}
    </div>
  );
};

export default ProductList;
