import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, ScrollToTop, Footer } from './components';
import {
  HomePage,
  LoginPage,
  OrderPage,
  PaymentPage,
  PlaceOrder,
  ProductsPage,
  ProfilePage,
  RegisterPage,
  ShippingPage,
  SingleProductPage,
  OrderListPage,
  ProductListPage,
  UserListPage,
  ErrorPage,
  ProductEditPage,
  UserEditPage,
} from './pages';
import CartPage from './pages/CartPage';

const App = () => {
  return (
    <div className="relative min-h-screen">
      <Router>
        <ScrollToTop>
          <Navbar />
          <main className="min-h-screen">
            <Switch>
              <Route exact path="/" component={HomePage}></Route>
              <Route exact path="/login" component={LoginPage}></Route>
              <Route exact path="/register" component={RegisterPage}></Route>
              <Route exact path="/products" component={ProductsPage}></Route>
              <Route
                exact
                path="/product/:id"
                component={SingleProductPage}
              ></Route>
              <Route exact path="/cart" component={CartPage}></Route>
              <Route exact path="/shipping" component={ShippingPage}></Route>
              <Route exact path="/payment" component={PaymentPage}></Route>
              <Route exact path="/placeorder" component={PlaceOrder}></Route>
              <Route exact path="/order/:id" component={OrderPage}></Route>
              <Route exact path="/profile" component={ProfilePage}></Route>

              <Route
                exact
                path="/admin/orderlist"
                component={OrderListPage}
              ></Route>
              <Route
                exact
                path="/admin/productlist"
                component={ProductListPage}
              ></Route>
              <Route
                exact
                path="/admin/product/:id/edit"
                component={ProductEditPage}
              ></Route>
              <Route
                exact
                path="/admin/userlist"
                component={UserListPage}
              ></Route>
              <Route
                exact
                path="/admin/user/:id/edit"
                component={UserEditPage}
              ></Route>
              <Route path="*">
                <ErrorPage />
              </Route>
            </Switch>
          </main>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
};

export default App;
