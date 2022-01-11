import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends React.Component {
  render() {
    return (
      <>
      <Navbar />
    <Calculator />
    </>
    );
  }
}

export default App;
