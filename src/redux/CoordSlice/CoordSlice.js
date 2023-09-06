import { createSlice } from '@reduxjs/toolkit';

const coordInitialState = {
	coord: {
		data: null,
		isLoading: false,
		error: '',
	},
};

export const coordSlice = createSlice({
	name: 'coords',
	initialState: coordInitialState,
	reducers: {
		getCoord: (state) => {
			state.coord.isLoading = true;
			state.coord.error = '';
		},
		getCoordSuccess: (state, action) => {
			state.coord.isLoading = false;
			state.coord.data = action.payload;
		},
		getCoordError: (state, action) => {
			state.coord.isLoading = false;
			state.coord.error = action.payload;
		},
	},
});

export default coordSlice.reducer;

export const { getCoord, getCoordSuccess, getCoordError } = coordSlice.actions;
