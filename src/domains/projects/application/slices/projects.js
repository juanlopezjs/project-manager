import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFetchListProjects } from '../../infrastructure/api';

export const initialState = {
	projects: [],
	loader: false,
	error: '',
};

export const getListProjects = createAsyncThunk('project/getListProjects', async (_, { rejectWithValue }) => {
	try {
		const response = await getFetchListProjects();
		return response;
	} catch (error) {
		return rejectWithValue(error);
	}
});

const Project = createSlice({
	name: 'project',
	initialState,
	extraReducers: ({ addCase }) => {
		addCase(getListProjects.pending, (state) => {
			state.loader = true;
		});
		addCase(getListProjects.fulfilled, (state, { payload }) => {
			state.loader = false;
			state.projects = payload;
			state.error = '';
		});
	},
});

export default Project;
