import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserSession, setUserSession } from '../helpers/auth';
import { getFetchLoginUser, getFetchUserForId } from '../../infrastructure/api';
import { dashboardRoute } from '../../../dashboard/infrastructure/routing/routes';
import { history } from '../../../../shared/application/helpers/history';
import { getFetchRolForId } from '../../../rols/infrastructure/api';

const user = JSON.parse(getUserSession());

export const initialState = {
	currentUser: user,
	loader: false,
	error: '',
};

export const getLogin = createAsyncThunk('auth/getLogin', async ({ username, password }, { rejectWithValue }) => {
	try {
		const response = await getFetchLoginUser(username, password);
		const responseUser = await getFetchUserForId(response[0].user_id);
		const newUser = responseUser[0];
		const responseRoleUser = await getFetchRolForId(newUser.rol);
		const data = { ...newUser, rol: responseRoleUser[0].name };
		setUserSession(JSON.stringify(data));
		history.push(dashboardRoute);
		return data;
	} catch (error) {
		return rejectWithValue(error);
	}
});

const Auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setResetError: (state) => {
			state.error = '';
		},
	},
	extraReducers: ({ addCase }) => {
		addCase(getLogin.pending, (state) => {
			state.loader = true;
		});
		addCase(getLogin.fulfilled, (state, { payload }) => {
			state.loader = false;
			state.currentUser = payload;
			state.error = '';
		});
		addCase(getLogin.rejected, (state) => {
			state.loader = false;
			state.error = 'Datos incorrectos';
		});
	},
});
export const { setResetError } = Auth.actions;

export default Auth;
