import { watchGetCoord } from '../sagas/sagas';
import { all, fork } from 'redux-saga/effects';

const rootSaga = function* () {
	yield all([fork(watchGetCoord)]);
};

export default rootSaga;
