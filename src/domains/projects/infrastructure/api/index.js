import { urlListProjects } from './backendUrls';

export const getFetchListProjects = () => {
	const requestOptions = {
		method: 'GET',
	};
	return fetch(urlListProjects(), requestOptions).then(res => res.json());
};

export default {}