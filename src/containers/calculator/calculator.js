import React, { Component, PropTypes } from 'react';
import CalculatorInput from '../calculator-input/calculator-input';
import CalculatorOutput from '../calculator-output/calculator-output';
import Paper from 'material-ui/lib/paper';
import Footer from '../footer';

export default class Calculator extends Component {
    render() {
        return (
            <div className="calculator-container">
                <Paper className="panel">
                    <CalculatorInput />
                    <CalculatorOutput />

                </Paper>
                <Footer />

            </div>
        )
    }
}
