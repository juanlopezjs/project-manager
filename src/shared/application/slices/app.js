import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	collapseSidebar: false,
};

const App = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setToggleCollapseSidebar: (state) => {
			state.collapseSidebar = !state.collapseSidebar;
		},
	},
});


export default App.reducer;

export const { setToggleCollapseSidebar } = App.actions;