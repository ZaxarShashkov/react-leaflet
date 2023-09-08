import { createAction, createSlice } from '@reduxjs/toolkit';
import { put, take } from 'redux-saga/effects';
import { getCoordApi } from '../../api/api';

const initialState = {
	list: [],
	isLoading: false,
};

export function* getCoordsSaga() {
	const { payload: coords } = yield take(GET_COORD);
	const response = yield getCoordApi(coords).then((response) => response.json());
	yield put(getCoordsSuccess(response));
}

const coordSlice = createSlice({
	name: 'coords',
	initialState,
	reducers: {
		getCoordsSuccess: (state, action) => {
			state.list = action.payload;
			state.isLoading = !state.isLoading;
		},
	},
});

export const GET_COORD = 'coords/getCoord';
export const getCoord = createAction(GET_COORD, (coords) => ({
	payload: coords,
}));

export const { getCoordsSuccess, reverseCoordinatesSuccess } = coordSlice.actions;
export default coordSlice.reducer;
