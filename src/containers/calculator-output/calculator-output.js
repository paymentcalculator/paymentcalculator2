import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

const paymentAmount = {
    'font-size': '3vw',
    'line-height': '4.5vw',
    'background': '#3e78a6',
    'width': '65%'
};


export default class CalculatorOutput extends Component {

    render() {
        return (
            <div>
                <div>
                    <span className="output-item">
                        <span className="output-label">
                            Monthly Payment:
                        </span>
                        <span className="output-value payment">
                            $454
                        </span>
                    </span>
                </div>
                <div>
                    <span className="output-item">
                        <span className="output-label">
                            Total Loan Cost:
                        </span>
                        <span className="output-value payment">
                            $10,738
                        </span>
                     </span>
                </div>
            </div>
        )
    }
}