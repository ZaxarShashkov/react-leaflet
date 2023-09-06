import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { getCoordError, getCoordSuccess } from '../CoordSlice/CoordSlice';

function* getCoordSaga() {
	try {
		const response = yield axios.get(
			'http://router.project-osrm.org/route/v1/car/30.29496392,59.84660399;30.42423701,59.82934196;30.38064206,59.83567701?overview=full&steps=true'
		);
		yield put(getCoordSuccess(response.data));
		console.log(response.data);
	} catch (error) {
		yield put(getCoordError(error));
	}
}

export function* watchGetCoord() {
	yield takeLatest(getCoordSaga);
}
