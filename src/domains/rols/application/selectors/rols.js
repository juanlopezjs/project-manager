import { createSelector } from '@reduxjs/toolkit';

export const rolsState = (state) => state.rols;

export const getSelectorRols = createSelector(rolsState, (rolsData) => {
	const { rols } = rolsData;
	return rols;
});
