import { createSelector } from '@reduxjs/toolkit';

export const authState = (state) => state.auth;

export const getSelectorCurrentUser = createSelector(authState, (auth) => {
	const { currentUser } = auth;
	return currentUser;
});


export const getSelectorErrorAuth = createSelector(authState, (auth) => {
	const { error } = auth;
	return error;
});
