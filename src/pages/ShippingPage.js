import React from 'react';
import ShippingForm from '../components/ShippingForm';
import Steps from '../components/Steps';

const ShippingPage = () => {
  return (
    <>
      <section className=" bg-amber-50 min-h-screen">
        <Steps ste1 step2/>
        <ShippingForm />
      </section>
    </>
  );
};

export default ShippingPage;
