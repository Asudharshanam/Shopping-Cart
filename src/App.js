
import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import ItemListCards from './containers/ItemListCards';
import Cart from './containers/Cart'
import Payment from './containers/Payment'
import WelcomePage from './components/WelcomePage';
import SellerForm from './containers/SellerForm';

import './App.css';

function App() {
  return (
    <div className="main-layout">
      <Router>
        <header>
          <AppHeader />
          <Cart />
        </header>
        <article>
          <div>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/seller-form" component={SellerForm} />
            <Route path="/shopping-items" component={ItemListCards} />
            <Route path="/payment" component={Payment} />
          </div>
        </article>
        <footer>
          <AppFooter />
        </footer>
      </Router>
    </div>
  );
}

export default App;