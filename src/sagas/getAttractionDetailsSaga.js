import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { getAttractionDetailsSuccess, getAttractionDetailsFailure } from '../redux'

const getDetails = (id) => {
    return axios.get(`http://localhost:5000/attractions/${id}`)
}

export function* getAttractionDetails(action) {
    try {
        const response = yield call(getDetails, action.payload)
        yield put(getAttractionDetailsSuccess(response.data))
    } catch (error) {
        yield put(getAttractionDetailsFailure(error.message))
    }
}