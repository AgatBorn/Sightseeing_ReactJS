import { GET_ALL_ATTRACTIONS_REQUEST, GET_ALL_ATTRACTIONS_SUCCESS, GET_ALL_ATTRACTIONS_FAILURE } from './attractionsTypes'

export const getAllAttractionsRequest = () => {
    return {
        type: GET_ALL_ATTRACTIONS_REQUEST
    }
}

export const getAllAttractionsSuccess = (listOfAttractions) => {
    return {
        type: GET_ALL_ATTRACTIONS_SUCCESS,
        payload: listOfAttractions
    }
}

export const getAllAttractionsFailure = (error) => {
    return {
        type: GET_ALL_ATTRACTIONS_FAILURE,
        payload: error
    }
}