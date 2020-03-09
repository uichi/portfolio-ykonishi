import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Works from '../components/Works';

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/works" component={Works} />
    </BrowserRouter>
  );
};
export default Router;