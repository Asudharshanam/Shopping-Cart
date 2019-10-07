
import React from 'react';

import AppHeader from './components/AppHeader'
import ItemListCards from './containers/ItemListCards';
import Cart from './containers/Cart'

import './App.css';

function App() {
  return (
    <div className="main-layout">
      <header>
        <AppHeader />
        <Cart />
      </header>
      <article>
        <ItemListCards />
      </article>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;