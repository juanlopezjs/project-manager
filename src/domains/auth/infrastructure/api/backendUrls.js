import { URL_PROD } from '../../../../shared/application/constants/env';

export const urlLogin = (user = '', password = '') => `${URL_PROD}login?user=${user}&password=${password}`;
export const urlUserForId = (userId = '') => `${URL_PROD}users?id=${userId}`;

