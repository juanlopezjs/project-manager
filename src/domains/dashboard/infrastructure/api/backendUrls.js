import { APP_KEY_OPEN_WEATHER } from '../../../../shared/application/constants/env';

export const fetchProductById = (lat = '', lon) =>
	`https://openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APP_KEY_OPEN_WEATHER}`;

export default {};
