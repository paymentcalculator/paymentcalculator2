import update from 'react-addons-update'
import { formReducer, modeled } from 'react-redux-form'
import Finance from 'financejs'


const calculatorInitialState = {
    inputAmount: 1000,
    inputRate: 3.25,
    inputDuration: 48,
    monthlyPayment: null,
    totalLoanCost: null
};

// This defines the handling of our custom actions created in the calculator.  Form actions are
// handled by wrapping this in our form helper.
function calculatorReducer(state = calculatorInitialState, action) {
    switch (action.type) {
        case 'CALCULATE':
            const finance = new Finance;
            const payment = finance.AM(state.inputAmount, state.inputRate, state.inputDuration, 0);
            const total = payment * state.inputDuration;
            return update(state, {monthlyPayment: {$set: payment}, totalLoanCost: {$set: total}});

        case 'RESET':
            return update(state, {$set: calculatorInitialState});

        default:
            return state;
    }
}

// Wrap the Reducer in our form helper so it can handle automatic form dispatches in addition to our
// custom actions handled above.
export const calculator = modeled(calculatorReducer, 'calculator');
export const calculatorForm = formReducer('calculator', calculatorInitialState);