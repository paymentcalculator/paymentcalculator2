import update from 'react-addons-update'
import { formReducer, modeled } from 'react-redux-form'
import Calc from 'loan-calc'

const calculatorInitialState = {
    inputAmount: 1000,
    inputRate: 3.25,
    inputDuration: 5,
    monthlyPayment: 112,
    totalLoanCost: 1345,
    interestCost: null
};

const calculatorResetState = {
    inputAmount: "",
    inputRate: "",
    inputDuration: "",
    monthlyPayment: "",
    totalLoanCost: "",
    interestCost: ""
};

// This defines the handling of our custom actions created in the calculator.  Form actions are
// handled by wrapping this in our form helper.
function calculatorReducer(state = calculatorInitialState, action) {
    switch (action.type) {

        case 'RESET':
            return update(state, {
                $set: calculatorResetState
            });

        case 'CALCULATE':
            let payment = Calc.paymentCalc({amount: state.inputAmount, rate: state.inputRate, termMonths: (state.inputDuration * 12)});
            let interest = Calc.totalInterest({amount: state.inputAmount, rate: state.inputRate, termMonths: (state.inputDuration * 12)});
            let cost = interest + Number(state.inputAmount);
            return update(state, {
                monthlyPayment: {
                    $set: payment
                },
                totalLoanCost: {
                    $set: cost
                }
            });

        default:
            return state;
    }
}

// Wrap the Reducer in our form helper so it can handle automatic form dispatches in addition to our
// custom actions handled above.
export const calculator = modeled(calculatorReducer, 'calculator');
export const calculatorForm = formReducer('calculator', calculatorInitialState);