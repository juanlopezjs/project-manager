import { createSelector } from '@reduxjs/toolkit';

export const dashboardState = (state) => state.dashboard;

export const getSelectorCurrentTime = createSelector(dashboardState, (dashboard) => {
	const { currentTime } = dashboard;
	return currentTime;
});

export const getSelectorDevelopmentCycle = createSelector(dashboardState, (dashboard) => {
	const { developmentCycle } = dashboard;
	return developmentCycle;
});

export const getSelectorCPUreport = createSelector(dashboardState, (dashboard) => {
	const { cpuReport } = dashboard;
	return cpuReport;
});

export const getSelectorCommitReport = createSelector(dashboardState, (dashboard) => {
	const { commitReport } = dashboard;
	return commitReport;
});

export const getSelectorReleaseResume = createSelector(dashboardState, (dashboard) => {
	const { releaseResume } = dashboard;
	return releaseResume;
});

export const getSelectorLoader = createSelector(dashboardState, (dashboard) => {
	const { loader } = dashboard;
	return loader;
});
