import { createAction, createSlice } from '@reduxjs/toolkit';
import { put } from 'redux-saga/effects';

const initialState = {
	list: [],
};

export const getCoordApi = () => {
	return fetch(
		'http://router.project-osrm.org/route/v1/car/30.29496392,59.84660399;30.42423701,59.82934196;30.38064206,59.83567701?geometries=geojson'
	);
};

export function* getCoordsSaga() {
	const payload = yield getCoordApi().then((response) => response.json());
	yield put(getCoordsSuccess(payload));
}

const coordSlice = createSlice({
	name: 'coords',
	initialState,
	reducers: {
		getCoordsSuccess: (state, action) => {
			state.list = action.payload;
		},
	},
});

export const GET_COORD = 'coords/getCoord';
export const getCoord = createAction(GET_COORD);

export const { getCoordsSuccess, reverseCoordinatesSuccess } = coordSlice.actions;
export default coordSlice.reducer;
