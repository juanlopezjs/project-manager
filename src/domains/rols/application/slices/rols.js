import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFetchListRols } from '../../infrastructure/api';

export const initialState = {
	rols: [],
	loader: false,
	error: '',
};

export const getListRols = createAsyncThunk('users/getListRols', async (_, { rejectWithValue }) => {
	try {
		const response = await getFetchListRols();
		return response;
	} catch (error) {
		return rejectWithValue(error);
	}
});

const Rols = createSlice({
	name: 'rols',
	initialState,
	reducers: {
		setResetError: (state) => {
			state.error = '';
		},
	},
	extraReducers: ({ addCase }) => {
		addCase(getListRols.pending, (state) => {
			state.loader = true;
		});
		addCase(getListRols.fulfilled, (state, { payload }) => {
			state.loader = false;
			state.rols = payload;
			state.error = '';
		});
	},
});
export const { setResetError } = Rols.actions;

export default Rols;
