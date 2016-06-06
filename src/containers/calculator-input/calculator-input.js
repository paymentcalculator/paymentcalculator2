import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import { createFieldClass, controls, Field, Form, actions, dispatch } from 'react-redux-form';

// Special form helper required to wrap material ui within react-redux-form
const MaterialField = createFieldClass({
    'TextField': controls.text
});

const inputStyle = {
    'font-size': '18px',
    'width': '90%'
};

const inputStyleLabel = {
    'font-size': '15px',
    'color': '#3e78a6'
};

const inputStyleComp = {
    'box-shadow': 'none'
};

const underlineStyle = {
    'border-color': '#3e78a6'
};
const buttonStyle = {
    'margin': '2vw'
};


export default class CalculatorInput extends Component {

    render() {
        return (
            <div>
                <Form model="calculator">
                    <MaterialField model="calculator.inputAmount">
                        <TextField
                            underlineStyle={underlineStyle}
                            inputStyle={inputStyleComp}
                            floatingLabelStyle={inputStyleLabel}
                            style={inputStyle}
                            floatingLabelText="Initial Loan Amount ($)"
                        />
                    </MaterialField>
                    <MaterialField model="calculator.inputRate">
                        <TextField
                            underlineStyle={underlineStyle}
                            inputStyle={inputStyleComp}
                            floatingLabelStyle={inputStyleLabel}
                            style={inputStyle}
                            floatingLabelText="Interest Rate (%)"
                        />
                    </MaterialField>
                    <MaterialField model="calculator.inputDuration">
                        <TextField
                            underlineStyle={underlineStyle}
                            inputStyle={inputStyleComp}
                            floatingLabelStyle={inputStyleLabel}
                            style={inputStyle}
                            floatingLabelText="Duration of Loan (months)"
                        />
                    </MaterialField>
                </Form>
                <RaisedButton
                    label="Calculate"
                    labelColor="white"
                    backgroundColor="green"
                    style={buttonStyle}
                />
                <RaisedButton
                    label="Reset All"
                    labelColor="white"
                    backgroundColor="red"
                    style={buttonStyle}
                />
            </div>
        )
    }
}