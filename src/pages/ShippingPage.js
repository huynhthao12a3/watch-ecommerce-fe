import React from 'react';
import ShippingForm from '../components/ShippingForm';
import Steps from '../components/Steps';

const ShippingPage = () => {
  return (
    <>
      <section className=" bg-amber-50 h-screen">
        <Steps />
        <ShippingForm />
      </section>
    </>
  );
};

export default ShippingPage;
