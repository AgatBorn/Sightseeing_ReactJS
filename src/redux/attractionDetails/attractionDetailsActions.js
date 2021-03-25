import { GET_ATTRACTION_DETAILS_REQUEST, GET_ATTRACTION_DETAILS_SUCCESS, GET_ATTRACTION_DETAILS_FAILURE } from './attractionDetailsTypes'

export const getAttractionDetailsRequest = (id) => {
    return {
        type: GET_ATTRACTION_DETAILS_REQUEST,
        payload: id
    }
}

export const getAttractionDetailsSuccess = (details) => {
    return {
        type: GET_ATTRACTION_DETAILS_SUCCESS,
        payload: details
    }
}

export const getAttractionDetailsFailure = (error) => {
    return {
        type: GET_ATTRACTION_DETAILS_FAILURE,
        payload: error
    }
}