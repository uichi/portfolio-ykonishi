import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Works from '../components/Works';
import SecretWorks from '../components/SecretWorks';
import Contact from '../components/Contact';
import NotFoundPage from '../components/NotFoundPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/works" component={Works} />
        <Route exact path="/works/test" component={SecretWorks} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route exact path="/works/process.env.REACT_APP_SECRET_WORKS_KEY" component={SecretWorks} /> */}
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;