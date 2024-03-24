import { fetchCPUreport, fetchCards, fetchCommitReport, fetchProductById, fetchReleaseResume } from "./backendUrls";

export const getFetchCurrentTime = (lat, lon) => {
	const requestOptions = {
		method: 'GET',
	};
	return fetch(fetchProductById(lat, lon), requestOptions).then((response) => response.json());
};

export const getFetchCards = () => {
	const requestOptions = {
		method: 'GET',
	};
	return fetch(fetchCards(), requestOptions).then((response) => response.json());
};

export const getFetchCPUreport = () => {
	const requestOptions = {
		method: 'GET',
	};
	return fetch(fetchCPUreport(), requestOptions).then((response) => response.json());
};


export const getFetchCommitReport = () => {
	const requestOptions = {
		method: 'GET',
	};
	return fetch(fetchCommitReport(), requestOptions).then((response) => response.json());
};

export const getFetchReleaseResume = () => {
	const requestOptions = {
		method: 'GET',
	};
	return fetch(fetchReleaseResume(), requestOptions).then((response) => response.json());
};


