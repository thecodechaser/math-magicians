import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Home from './components/Home';
import Quote from './components/Quote';
import { Routes, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <Routes>
        <Route path="/"
        element={(
          <Home />
        )}
        />
        <Route path="/calculator"
        element={(
          <Calculator />
        )}
        />
        <Route path="/quote"
        element={(
          <Quote />
        )}
        />
      </Routes>
    </>
    );
  }
}

export default App;
