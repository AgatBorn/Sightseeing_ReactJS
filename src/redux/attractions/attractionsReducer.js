import { GET_ALL_ATTRACTIONS_REQUEST, GET_ALL_ATTRACTIONS_SUCCESS, GET_ALL_ATTRACTIONS_FAILURE } from './attractionsTypes'

const initialState = {
    loading: false,
    listOfAttractions: [],
    error: ''
}

const attractionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ATTRACTIONS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_ALL_ATTRACTIONS_SUCCESS:
            return {
                loading: false,
                listOfAttractions: action.payload,
                error: '',
            }
        case GET_ALL_ATTRACTIONS_FAILURE:
            return {
                loading: false,
                listOfAttractions: [],
                error: action.payload,
            }
        default: return state
    }
}

export default attractionsReducer