import { combineReducers } from 'redux';
import example, { initialState as exampleInitial } from '../../../domains/dashboard/application/slices/example';

export const initialStates = {
	example: exampleInitial,
};

export default combineReducers({
	example,
});
