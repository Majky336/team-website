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
        <Route
          path="TeamProject/2018/team18iss-it/about"
          component={MainPage}
        />
        <Route
          path="TeamProject/2018/team18iss-it/contact"
          component={MainPage}
        />
        <Route path="TeamProject/2018/team18iss-it/team" component={MainPage} />
        <Route
          path="TeamProject/2018/team18iss-it/documents"
          component={DocumentPage}
        />
        <Route
          exact
          path="TeamProject/2018/team18iss-it/"
          component={MainPage}
        />
      </Switch>
      <Footer />
    </div>
  </Router>
);
export default AppRouter;
