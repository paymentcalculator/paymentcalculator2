import React, { Component, PropTypes } from 'react';
import currencyFormatter from 'currency-formatter';

const paymentAmount = {
    'font-size': '3vw',
    'line-height': '4.5vw',
    'background': '#3e78a6',
    'width': '65%'
};


export default class CalculatorOutput extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <div>
                    <span className="output-item">
                        <span className="output-label">
                            Monthly Payment:
                        </span>
                        <span className="output-value payment">
                            {currencyFormatter.format(this.props.calculator.monthlyPayment, { code: 'USD' })}
                        </span>
                    </span>
                </div>
                <div>
                    <span className="output-item">
                        <span className="output-label">
                            Total Loan Cost:
                        </span>
                        <span className="output-value payment">
                            {currencyFormatter.format(this.props.calculator.totalLoanCost, { code: 'USD' })}
                        </span>
                     </span>
                </div>
                <br />
                <a rel="nofollow" href="https://amortizationcalculator.github.io">Generate Amortization Chart</a>
            </div>
        )
    }
}