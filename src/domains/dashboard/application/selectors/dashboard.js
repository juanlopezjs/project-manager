import { createSelector } from '@reduxjs/toolkit';

export const dashboardState = (state) => state.dashboard;

export const getSelectorCurrentTime = createSelector(dashboardState, (dashboard) => {
	const { currentTime } = dashboard;
	return currentTime;
});
