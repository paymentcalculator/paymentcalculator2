import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import { createFieldClass, controls, Field, Form, actions, dispatch } from 'react-redux-form';
import { connect } from 'react-redux'
import * as Actions from '../../actions'

// Special form helper required to wrap material ui within react-redux-form
const MaterialField = createFieldClass({
    'TextField': controls.text
});

const inputStyle = {
    'fontSize': '3vw',
    'lineHeight': '4.5vw',
    'width': '60vw',
    'height': '8vw'
};

const inputStyleLabel = {
    'fontSize': '2vw',
    'lineHeight': '3vw',
    'height': '6vw',
    'color': '#3e78a6'
};

const inputStyleComp = {
    'boxShadow': 'none',
    'lineHeight': '4.5vw'
};

const underlineStyle = {
    'borderColor': '#3e78a6'
};
const buttonStyle = {
    'margin': '2vw'
};


class CalculatorInput extends Component {

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
                    onClick={this.props.calculate}
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


const mapStateToProps = (state) => {
    return {

    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        calculate: () => {
            dispatch(Actions.calculate())
        },
        reset: () => {
            dispatch(Actions.reset())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorInput)