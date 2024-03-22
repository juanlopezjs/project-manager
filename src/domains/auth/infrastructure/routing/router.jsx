import LoginPage from '../../presentation/pages/LoginPage';
import { loginRoute } from './routes';
import { UnauthenticatedRoute } from '../../../../shared/presentation/redirect-route';

const authRouter = {
	router: [
		{
			path: loginRoute,
			page: LoginPage,
			routeComponent: UnauthenticatedRoute,
		},
	],
};

export default authRouter;
