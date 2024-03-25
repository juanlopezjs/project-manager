import { combineReducers } from 'redux';

import { importFiles } from '../helpers/common-functions';
import app from '../slices/app';

const importRouter = import.meta.glob('../../../domains/**/application/slices/**.js');
const slicesDomain = await importFiles(importRouter);

const reducers = {};
slicesDomain.forEach((slice) => {
	reducers[slice.default.name] = slice.default.reducer;
});

export default combineReducers({
	...reducers,
	app,
});
