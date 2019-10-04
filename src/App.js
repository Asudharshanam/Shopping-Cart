
import React from 'react';

import AppHeader from './components/AppHeader'

import './App.css';

function App() {
  return (
    <div className="main-layout">

      <header>
        <AppHeader />
      </header>


      <nav>
        <h1>Nav</h1>
      </nav>


      <article>
        <h1>London</h1>
        <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
        <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
      </article>


      <footer>
        <p>Footer</p>
      </footer>

    </div>
  );
}

export default App;