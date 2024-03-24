import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
	getFetchCPUreport,
	getFetchCards,
	getFetchCommitReport,
	getFetchCurrentTime,
	getFetchReleaseResume,
} from '../../infrastructure/api';

export const initialState = {
	currentTime: {},
	loader: true,
	developmentCycle: {},
	cpuReport: {},
	commitReport: [],
	releaseResume: {},
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

export const getDashboardCards = createAsyncThunk('dashboard/getDashboardCards', async (_, { rejectWithValue }) => {
	try {
		return await getFetchCards();
	} catch (error) {
		return rejectWithValue(error);
	}
});

export const getCPUreport = createAsyncThunk('dashboard/getCPUreport', async (_, { rejectWithValue }) => {
	try {
		return await getFetchCPUreport();
	} catch (error) {
		return rejectWithValue(error);
	}
});

export const getCommitReport = createAsyncThunk('dashboard/getCommitReport', async (_, { rejectWithValue }) => {
	try {
		return await getFetchCommitReport();
	} catch (error) {
		return rejectWithValue(error);
	}
});

export const getReleaseResume = createAsyncThunk('dashboard/getReleaseResume', async (_, { rejectWithValue }) => {
	try {
		return await getFetchReleaseResume();
	} catch (error) {
		return rejectWithValue(error);
	}
});

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
		addCase(getDashboardCards.fulfilled, (state, { payload }) => {
			state.developmentCycle = payload;
		});
		addCase(getCPUreport.fulfilled, (state, { payload }) => {
			state.cpuReport = payload;
		});
		addCase(getCommitReport.fulfilled, (state, { payload }) => {
			state.commitReport = payload;
		});
		addCase(getReleaseResume.fulfilled, (state, { payload }) => {
			state.releaseResume = payload;
		});
	},
});

export const { addTodo } = Dashboard.actions;

export default Dashboard;
