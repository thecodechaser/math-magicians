import React from 'react';
import './Calculator.css'

class Calculator extends React.Component {
    constructor(props){
        super(props)
        this.state = {};
    }

    render() {
        return (
            <main>
                <div class="output"><p class="output-p">0</p></div>
                <div class="cal-btns">
                    <button class="btn" type="button">AC</button>
                    <button class="btn" type="button">+/-</button>
                    <button class="btn" type="button">%</button>
                    <button class="btn last" type="button">÷</button>
                </div>
                <div class="cal-btns">
                    <button class="btn" type="button">7</button>
                    <button class="btn" type="button">8</button>
                    <button class="btn" type="button">9</button>
                    <button class="btn last" type="button">x</button>
                </div>
                <div class="cal-btns">
                    <button class="btn" type="button">4</button>
                    <button class="btn" type="button">5</button>
                    <button class="btn" type="button">6</button>
                    <button class="btn last" type="button">-</button>
                </div>
                <div class="cal-btns">
                    <button class="btn" type="button">1</button>
                    <button class="btn" type="button">2</button>
                    <button class="btn" type="button">3</button>
                    <button class="btn last" type="button">+</button>
                </div>
                <div class="cal-btns">
                    <button class="btn zero" type="button">0</button>
                    <button class="btn" type="button">.</button>
                    <button class="btn last" type="button">=</button>
                </div>
            </main>
        );
    }
}

export default Calculator;