import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import coordReducer from '../CoordSlice/CoordSlice';
import rootSaga from '../rootSaga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: { coordReducer },
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
