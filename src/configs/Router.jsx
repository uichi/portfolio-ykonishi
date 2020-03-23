import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Works from '../components/Works';
import WorkDetail from '../components/WorkDetail';
import SecretWorks from '../components/SecretWorks';
import SecretWorkDetail from '../components/SecretWorkDetail';
import Contact from '../components/Contact';
import NotFoundPage from '../components/NotFoundPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/works" component={Works} />
        <Route path="/works/:id" component={WorkDetail} />
        <Route exact path="/secret-works" component={SecretWorks} />
        <Route path="/secret-works/:id" component={SecretWorkDetail} />
        <Route exact path="/contact" component={Contact} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;