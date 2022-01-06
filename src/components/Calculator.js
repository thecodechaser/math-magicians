import React from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {

 const handleClick = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  }

    const { next, total } =state;
    return (
      <main>
        <div className="output"><p className="output-p">{next || total || 0}</p></div>
        <div className="cal-btns">
          <button className="btn" type="button" onClick={handleClick}>AC</button>
          <button className="btn" type="button" onClick={handleClick}>+/-</button>
          <button className="btn" type="button" onClick={handleClick}>%</button>
          <button className="btn last" type="button" onClick={handleClick}>÷</button>
        </div>
        <div className="cal-btns">
          <button className="btn" type="button" onClick={handleClick}>7</button>
          <button className="btn" type="button" onClick={handleClick}>8</button>
          <button className="btn" type="button" onClick={handleClick}>9</button>
          <button className="btn last" type="button" onClick={handleClick}>x</button>
        </div>
        <div className="cal-btns">
          <button className="btn" type="button" onClick={handleClick}>4</button>
          <button className="btn" type="button" onClick={handleClick}>5</button>
          <button className="btn" type="button" onClick={handleClick}>6</button>
          <button className="btn last" type="button" onClick={handleClick}>-</button>
        </div>
        <div className="cal-btns">
          <button className="btn" type="button" onClick={handleClick}>1</button>
          <button className="btn" type="button" onClick={handleClick}>2</button>
          <button className="btn" type="button" onClick={handleClick}>3</button>
          <button className="btn last" type="button" onClick={handleClick}>+</button>
        </div>
        <div className="cal-btns">
          <button className="btn zero" type="button" onClick={handleClick}>0</button>
          <button className="btn" type="button" onClick={handleClick}>.</button>
          <button className="btn last" type="button" onClick={handleClick}>=</button>
        </div>
      </main>
    );
}

export default Calculator;
