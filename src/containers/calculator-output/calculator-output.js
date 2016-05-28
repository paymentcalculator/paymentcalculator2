import React, { Component, PropTypes } from 'react'
import connect from 'react-redux'

const paymentAmount = {
    'font-size': '3vw',
    'line-height': '4.5vw',
    'background': '#3e78a6',
    'width': '65%'
};


export default class CalculatorOutput extends Component {
    constructor(props){
        super(props);
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
                            ${this.props.monthlyPayment}
                        </span>
                    </span>
                </div>
                <div>
                    <span className="output-item">
                        <span className="output-label">
                            Total Loan Cost:
                        </span>
                        <span className="output-value payment">
                            ${this.props.totalLoanCost}
                        </span>
                     </span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        monthlyPayment: state.calculator.monthlyPayment,
        totalLoanCost: state.calculator.totalLoanCost
    };
};


const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps)(CalculatorOutput)
