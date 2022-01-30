import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar } from './components';
import Footer from './components/Footer';
import { HomePage, ProductsPage, SingleProductPage } from './pages';
import CartPage from './pages/CartPage';

const App = () => {
  return (
    <div className="relative min-h-screen">
      <Router>
        <Navbar />
        <main className="min-h-screen">
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/products" component={ProductsPage}></Route>
            <Route
              exact
              path="/product/:id"
              component={SingleProductPage}
            ></Route>
            <Route exact path="/cart" component={CartPage}></Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
