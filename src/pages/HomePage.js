import React from 'react';
import { Hero } from '../components';
import { Featured } from '../components/Featured';
import Promo from '../components/Promo';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Featured/>
      <Promo/>
    </>
  );
};

export default HomePage;
