import { urlLogin, urlUserForId } from './backendUrls';

export const getFetchLoginUser = (user, password) => {
	const requestOptions = {
		method: 'GET',
	};
	return fetch(urlLogin(user, password), requestOptions).then(res => res.json());
};

export const getFetchUserForId = (userId) => {
	const requestOptions = {
		method: 'GET',
	};
	return fetch(urlUserForId(userId), requestOptions).then(res => res.json());
};

