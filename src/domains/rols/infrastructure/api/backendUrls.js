import { URL_PROD } from '../../../../shared/application/constants/env';

export const urlListRols = () => `${URL_PROD}rols`;
export const urlRolForId = (id) => `${urlListRols()}?id=${id}`;
export default {};
