import React from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { next, total } = this.state;
    return (
      <main>
        <div className="output"><p className="output-p">{next || total || 0}</p></div>
        <div className="cal-btns">
          <button className="btn" type="button">AC</button>
          <button className="btn" type="button">+/-</button>
          <button className="btn" type="button">%</button>
          <button className="btn last" type="button">÷</button>
        </div>
        <div className="cal-btns">
          <button className="btn" type="button">7</button>
          <button className="btn" type="button">8</button>
          <button className="btn" type="button">9</button>
          <button className="btn last" type="button">x</button>
        </div>
        <div className="cal-btns">
          <button className="btn" type="button">4</button>
          <button className="btn" type="button">5</button>
          <button className="btn" type="button">6</button>
          <button className="btn last" type="button">-</button>
        </div>
        <div className="cal-btns">
          <button className="btn" type="button">1</button>
          <button className="btn" type="button">2</button>
          <button className="btn" type="button">3</button>
          <button className="btn last" type="button">+</button>
        </div>
        <div className="cal-btns">
          <button className="btn zero" type="button">0</button>
          <button className="btn" type="button">.</button>
          <button className="btn last" type="button">=</button>
        </div>
      </main>
    );
  }
}

export default Calculator;
