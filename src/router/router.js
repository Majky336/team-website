import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import DocumentPage from '../pages/DocumentPage';
import MainPage from '../pages/MainPage';

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/about" component={MainPage} />
        <Route path="/contact" component={MainPage} />
        <Route path="/team" component={MainPage} />
        <Route path="/documents" component={DocumentPage} />
        <Route exact path="/" component={MainPage} />
      </Switch>
      <Footer />
    </div>
  </Router>
);
export default AppRouter;
