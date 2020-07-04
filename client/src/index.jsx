import React from 'react';
import ReactDOM from 'react-dom';

import {
  Example, Teste, Navbar, Search, Hotdog, Footer,
} from './components';

import './index.css';

function App() {
  return (
    <section className="app">
      <Navbar />
      <div className="container1">
        <div className="cardapiotexto">Cardápio</div>
        <div><Search/></div>
      </div>
      <Hotdog />
      <Footer />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))