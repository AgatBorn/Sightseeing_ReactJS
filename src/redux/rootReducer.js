import { combineReducers } from 'redux'
import attractionsReducer from './attractions/attractionsReducer'
import attractionDetailsReducer from './attractionDetails/attractionDetailsReducer'

export const rootReducer = combineReducers({
    attractions: attractionsReducer,
    attractionDetails: attractionDetailsReducer
})
