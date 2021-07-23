import React from 'react';
import { Category, Layout } from 'components';

import ProductPageStyle from './styled';

export default function Productpage() {
  const products = [
    { name: 'prouduct1', price: 250000, picture: [{ src: 'images/product/product1/C4.jpg' }, { src: 'images/product/product1/C4-1.jpg' }] },
    { name: 'prouduct2', price: 250000, picture: [{ src: 'images/product/product2/C5-1.jpg' }, { src: 'images/product/product2/C5-2.jpg' }] },
    { name: 'prouduct3', price: 250000, picture: [{ src: 'images/product/product3/C6.jpg' }, { src: 'images/product/product3/C6-1.jpg' }] },
    { name: 'prouduct4', price: 250000, picture: [{ src: 'images/product/product4/C7.jpg' }, { src: 'images/product/product4/C8.jpg' }] },
    { name: 'prouduct5', price: 250000, picture: [{ src: 'images/product/product5/C10.jpg' }, { src: 'images/product/product5/C11.jpg' }] },
  ];
  return (
    <ProductPageStyle>
      <Layout>
        <div>
          <h2>Product</h2>
          <Category items={products} />
        </div>
      </Layout>
    </ProductPageStyle>
  );
}
