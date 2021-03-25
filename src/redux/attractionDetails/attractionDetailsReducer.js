import { GET_ATTRACTION_DETAILS_REQUEST, GET_ATTRACTION_DETAILS_SUCCESS, GET_ATTRACTION_DETAILS_FAILURE } from './attractionDetailsTypes'

const initialState = {
    loading: false,
    details: {},
    error: ''
}

const attractionDetailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ATTRACTION_DETAILS_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case GET_ATTRACTION_DETAILS_SUCCESS:
            return {
                loading: false,
                details: action.payload,
                error: ''
            }
        case GET_ATTRACTION_DETAILS_FAILURE:
            return {
                loading: false,
                details: {},
                error: action.payload
            }
            default: return state
    }
}

export default attractionDetailsReducer