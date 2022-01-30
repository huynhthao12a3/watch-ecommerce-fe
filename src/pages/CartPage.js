import React from 'react';
import { Link } from 'react-router-dom';
import Btn from '../components/Btn';
import CartContent from '../components/CartContent';
import PageHero from '../components/PageHero';
import { cart } from '../data';

const CartPage = () => {
  if (cart.length < 1) {
    return (
      <div className=" h-screen ">
        <section className="section-center  text-center py-20">
          <h2 className="text-4xl font-semibold mb-7">Your cart is empty</h2>
          <Link to="/products">
            <Btn name="Fill it up" />
          </Link>
        </section>
      </div>
    );
  }
  return (
    <div>
      <PageHero title="Cart" />
      <CartContent />
    </div>
  );
};

export default CartPage;
