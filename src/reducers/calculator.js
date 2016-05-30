import update from 'react-addons-update'
import { formReducer, modeled } from 'react-redux-form'

const calculatorInitialState = {
    inputAmount: 1000,
    inputRate: 3.25,
    inputDuration: 48,
    monthlyPayment: null,
    totalLoanCost: null,
    interestCost: null
};

// This defines the handling of our custom actions created in the calculator.  Form actions are
// handled by wrapping this in our form helper.
function calculatorReducer(state = calculatorInitialState, action) {
    switch (action.type) {
        case 'TOGGLE_CAMPAIGN_CREATION_WIZARD_MODAL':
            return update(state, {showModal: {$set: !state.showModal}});

        case 'GOTO_NEXT_WIZARD_STEP':
            return update(state, {currentStep: {$set: state.currentStep + 1}});

        case 'GOTO_PREVIOUS_WIZARD_STEP':
            return update(state, {currentStep: {$set: state.currentStep - 1}});

        case 'APPLY_SEGMENT':
            return update(state, {
                currentWorkingCampaign: {
                    currentWorkingSegments: {
                        [action.index]: {
                            viewMode: {$set: 'preview'}
                        }
                    }
                }
            });

        case 'EDIT_SEGMENT':
            return update(state, {
                currentWorkingCampaign: {
                    currentWorkingSegments: {
                        [action.index]: {
                            viewMode: {$set: 'edit'}
                        }
                    }
                }
            });

        case 'DELETE_SEGMENT':
            return update(state, {
                currentWorkingCampaign: {
                    currentWorkingSegments: {
                        $splice: [[action.index, 1]]
                    }
                }
            });

        case 'DUPLICATE_SEGMENT':
            const newSegment = state.currentWorkingCampaign.currentWorkingSegments[action.index];

            return update(state, {
                currentWorkingCampaign: {
                    currentWorkingSegments: {
                        // INSERT after caller's index
                        $splice: [[action.index + 1, 0, newSegment]]
                    }
                }
            });

        case 'ADD_NEW_SEGMENT':
            return update(state, {
                currentWorkingCampaign: {
                    currentWorkingSegments: {
                        $push: [{viewMode: 'edit'}]
                    }
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