import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFetchCurrentTime } from '../../infrastructure/api';

export const initialState = {
	currentTime: {},
	loader: false,
};

export const getCurrentTime = createAsyncThunk(
	'dashboard/getCurrentTime',
	async ({ lat, lon }, { rejectWithValue }) => {
		try {
			return await getFetchCurrentTime(lat, lon);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

const Dashboard = createSlice({
	name: 'dashboard',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.todos.push(action.payload);
		},
	},
	extraReducers: ({ addCase }) => {
		addCase(getCurrentTime.pending, (state) => {
			state.loader = true;
		});
		addCase(getCurrentTime.fulfilled, (state, { payload }) => {
			state.currentTime = payload;
			state.loader = false;
		});
	},
});

export const { addTodo } = Dashboard.actions;

export default Dashboard.reducer;
