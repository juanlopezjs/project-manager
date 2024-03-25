import { LOCALSTORAGE_USER } from '../constansts/localStorageKeys';

export const getUserSession = () => {
	return localStorage.getItem(LOCALSTORAGE_USER);
};

export const setUserSession = (user) => {
	return localStorage.setItem(LOCALSTORAGE_USER, user);
};

export const deleteUserSession = () => {
	return localStorage.removeItem(LOCALSTORAGE_USER);
};
