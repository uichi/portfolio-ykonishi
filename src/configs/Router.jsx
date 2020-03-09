import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
};
export default Router;