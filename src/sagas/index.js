import { takeEvery } from 'redux-saga/effects'
import { GET_ALL_ATTRACTIONS_REQUEST } from '../redux/attractions/attractionsTypes'
import { GET_ATTRACTION_DETAILS_REQUEST } from '../redux/attractionDetails/attractionDetailsTypes'
import { getListOfAttractions } from './getAttractionsSaga'
import { getAttractionDetails } from './getAttractionDetailsSaga'

export function* rootSaga() {
    yield [
      yield takeEvery (GET_ALL_ATTRACTIONS_REQUEST, getListOfAttractions),
      yield takeEvery (GET_ATTRACTION_DETAILS_REQUEST, getAttractionDetails)
    ];
  }