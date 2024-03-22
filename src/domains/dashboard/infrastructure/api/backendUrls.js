import { APP_KEY_OPEN_WEATHER, URL_PROD } from '../../../../shared/application/constants/env';

export const fetchProductById = (lat = '', lon) =>
	`https://openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APP_KEY_OPEN_WEATHER}`;

export const fetchCards = () => `${URL_PROD}dashboard_cards`;
export const fetchCPUreport = () => `${URL_PROD}cpu_report`;
export const fetchCommitReport = () => `${URL_PROD}report_commits`;
