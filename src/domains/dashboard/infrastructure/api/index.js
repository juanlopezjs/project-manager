
export const getServiceExample = () => {
	const requestOptions = {
		method: 'GET',
	};
	return fetch('endpoint', requestOptions).then((response) => response.json());
};

export default { getServiceExample };
