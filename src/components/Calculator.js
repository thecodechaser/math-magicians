import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({});

  const handleClick = (e) => {
    setState(calculate(state, e.target.textContent));
  };

  const { next, total } = state;
  return (
    <main class="cal-main">
      <div><p>Let's do some math!</p></div>
      <div>
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
      </div>
    </main>
  );
};

export default Calculator;
