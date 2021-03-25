import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { getAllAttractionsSuccess, getAllAttractionsFailure } from '../redux'

const getAttractions = () => {
    return axios.get('http://localhost:5000/attractions')
}

export function* getListOfAttractions() {
    try {
        const response = yield call(getAttractions)
        yield put(getAllAttractionsSuccess(response.data))
    } catch (error) {
        yield put(getAllAttractionsFailure(error.message))
    }
}