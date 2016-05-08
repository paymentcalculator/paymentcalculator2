import { routeReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { calculator, calculatorForm } from './calculator'

// Compile our dislocated reducers into a common rootReducer and create our state shape.
const rootReducer = combineReducers({
  routing: routeReducer,
  calculator,
  calculatorForm
});

export default rootReducer

