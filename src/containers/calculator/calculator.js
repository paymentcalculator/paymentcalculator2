import React, { Component, PropTypes } from 'react';
import CalculatorInput from '../calculator-input/calculator-input';
import CalculatorOutput from '../calculator-output/calculator-output';
import Paper from 'material-ui/lib/paper';
import Footer from '../footer';
import { connect } from 'react-redux';
import * as Actions from '../../actions'

class Calculator extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="calculator-container">
                <Paper className="panel">
                    <CalculatorInput
                        reset={this.props.reset}
                        calculator={this.props.calculator}
                    />
                    <CalculatorOutput
                        calculator={this.props.calculator}
                    />

                </Paper>
                <Footer />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        calculator: state.calculator
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => {
            dispatch(Actions.reset())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
