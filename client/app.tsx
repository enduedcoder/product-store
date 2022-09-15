import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Header } from './components/ui/header';
import { ProductDetails, Home } from './pages';
import apolloClient from './setup';
import './global-css-variables/variables.scss';

export default () => (
  <ApolloProvider client={apolloClient}>
    <Router>
      <Header />
      <Switch>
        <Route path="/product/:productId">
          <ProductDetails />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </ApolloProvider>
);
