import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { configureStore } from '@reduxjs/toolkit';
import coords, { GET_COORD, getCoordsSaga } from '../CoordSlice/CoordSlice';

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
	yield takeEvery(GET_COORD, getCoordsSaga);
}

const store = configureStore({
	devTools: true,
	reducer: {
		coords,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export default store;
