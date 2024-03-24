import { createSelector } from '@reduxjs/toolkit';

export const usersState = (state) => state.users;

export const getSelectorUsers = createSelector(usersState, (usersData) => {
	const { users } = usersData;
	return users;
});
