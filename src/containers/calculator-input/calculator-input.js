import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import { createFieldClass, controls, Field, Form, actions, dispatch } from 'react-redux-form';

// Special form helper required to wrap material ui within react-redux-form
const MaterialField = createFieldClass({
    'TextField': controls.text
});

const inputStyle = {
    'fontSize': '32px',
    'lineHeight': '36px',
    'height': '88px',
    'width': '90%',
    'paddingBottom': '-5px'
};

const inputStyleLabel = {
    'fontSize': '16px',
    'color': '#3e78a6'
};

const inputStyleComp = {
    'boxShadow': 'none'
};

const underlineStyle = {
    'borderColor': '#3e78a6',
    'marginTop': '10px'
};
const buttonStyle = {
    'margin': '5vw'
};


export default class CalculatorInput extends Component {
    constructor(props){
        super(props)
    }

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
                            value={this.props.calculator.inputAmount}
                            floatingLabelText="Initial Loan Amount ($)"
                        />
                    </MaterialField>
                    <MaterialField model="calculator.inputRate">
                        <TextField
                            underlineStyle={underlineStyle}
                            inputStyle={inputStyleComp}
                            floatingLabelStyle={inputStyleLabel}
                            style={inputStyle}
                            value={this.props.calculator.inputRate}
                            floatingLabelText="Interest Rate (%)"
                        />
                    </MaterialField>
                    <MaterialField model="calculator.inputDuration">
                        <TextField
                            underlineStyle={underlineStyle}
                            inputStyle={inputStyleComp}
                            floatingLabelStyle={inputStyleLabel}
                            style={inputStyle}
                            value={this.props.calculator.inputDuration}
                            floatingLabelText="Duration of Loan (years)"
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
                    onClick={this.props.reset}
                />
            </div>
        )
    }
}