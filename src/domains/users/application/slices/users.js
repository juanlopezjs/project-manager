import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFetchListUser } from '../../infrastructure/api';

export const initialState = {
	users: [],
	loader: false,
	error: '',
};

export const getListUser = createAsyncThunk('users/getListUser', async (_, { rejectWithValue }) => {
	try {
		const response = await getFetchListUser();
		return response;
	} catch (error) {
		return rejectWithValue(error);
	}
});

const Users = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setResetError: (state) => {
			state.error = '';
		},
	},
	extraReducers: ({ addCase }) => {
		addCase(getListUser.pending, (state) => {
			state.loader = true;
		});
		addCase(getListUser.fulfilled, (state, { payload }) => {
			state.loader = false;
			state.users = payload;
			state.error = '';
		});
	},
});
export const { setResetError } = Users.actions;

export default Users;
