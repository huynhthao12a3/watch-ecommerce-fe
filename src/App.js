import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar } from './components';
import Footer from './components/Footer';
import { HomePage, ProductsPage, SingleProductPage } from './pages';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/products" component={ProductsPage}></Route>
          <Route
            exact
            path="/product/:id"
            component={SingleProductPage}
          ></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
