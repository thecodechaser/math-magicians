import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';
import { Routes, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <>
      <Navbar />
      <Routes>
        <Route path="/home"
        element={(
          <Home />
        )}
        />
        <Route path="/calculator"
        element={(
          <Calculator />
        )}
        />
       
      </Routes>
    </>
    );
  }
}

export default App;
