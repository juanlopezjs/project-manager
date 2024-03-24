import { createSelector } from '@reduxjs/toolkit';

export const projectState = (state) => state.project;

export const getSelectorProjects = createSelector(projectState, (projectData) => {
	const { projects } = projectData;
	return projects;
});
