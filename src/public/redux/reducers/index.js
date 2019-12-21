import { combineReducers } from 'redux'

// import all reducer
import numbers from './numbers'
import series from './series'

const rootReducer = combineReducers({
    numbers,
    series
})

export default rootReducer