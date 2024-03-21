import { fetchProductById } from "./backendUrls";

export const getFetchCurrentTime = (lat, lon) => {
	const requestOptions = {
		method: 'GET',
	};
	return fetch(fetchProductById(lat, lon), requestOptions).then((response) => response.json());
};

export default { getFetchCurrentTime };
