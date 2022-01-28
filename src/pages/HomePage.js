import React from 'react';
import { Hero, NewProducts, FeaturedProducts } from '../components';
import Promo from '../components/Promo';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Promo />
      <NewProducts />
    </>
  );
};

export default HomePage;
