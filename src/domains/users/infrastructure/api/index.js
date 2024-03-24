import { urlListUser } from './backendUrls';

export const getFetchListUser = () => {
	const requestOptions = {
		method: 'GET',
	};
	return fetch(urlListUser(), requestOptions).then(res => res.json());
};

export default {}