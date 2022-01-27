import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar } from './components';
import { HomePage } from './pages';

const App = () => {
  return (
    <div className="min-h-screen">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
