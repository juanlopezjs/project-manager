import { urlListRols, urlRolForId } from './backendUrls';

export const getFetchListRols = () => {
	const requestOptions = {
		method: 'GET',
	};
	return fetch(urlListRols(), requestOptions).then(res => res.json());
};

export const getFetchRolForId = (id) => {
	const requestOptions = {
		method: 'GET',
	};
	return fetch(urlRolForId(id), requestOptions).then(res => res.json());
};

export default {}