import update from 'react-addons-update'
import { formReducer, modeled } from 'react-redux-form'

const calculatorInitialState = {
    inputAmount: 1000,
    inputRate: 3.25,
    inputDuration: 5,
    monthlyPayment: 112,
    totalLoanCost: 1345,
    interestCost: null
};

const calculatorResetState = {
    inputAmount: null,
    inputRate: null,
    inputDuration: null,
    monthlyPayment: null,
    totalLoanCost: null,
    interestCost: null
};

// This defines the handling of our custom actions created in the calculator.  Form actions are
// handled by wrapping this in our form helper.
function calculatorReducer(state = calculatorInitialState, action) {
    switch (action.type) {

        case 'RESET':
            return update(state, {
                $set: calculatorResetState
            });

        default:
            return state;
    }
}

// Wrap the Reducer in our form helper so it can handle automatic form dispatches in addition to our
// custom actions handled above.
export const calculator = modeled(calculatorReducer, 'calculator');
export const calculatorForm = formReducer('calculator', calculatorInitialState);