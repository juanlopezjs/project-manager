import { createSelector } from '@reduxjs/toolkit';

export const appState = (state) => state?.app;

export const getSelectorCollapseSidebar = createSelector(appState, (app) => {
	return app?.collapseSidebar;
});
