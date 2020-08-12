import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { GET_SAGA_LIST } from './actionTypes';
import { getListAction } from './actionCreators';

function* mySagas() {
    yield takeEvery(GET_SAGA_LIST, getSagaList);
}
function* getSagaList() {
    const res = yield axios.get('https://easy-mock.com/mock/5f33c8c6a67fac708f9626df/todolist');
    yield put(getListAction(res.data.list))
}
       
export default mySagas;