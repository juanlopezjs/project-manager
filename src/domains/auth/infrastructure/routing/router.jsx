import { lazy } from 'react';
import { loginRoute } from './routes';
import { UnauthenticatedRoute } from '../../../../shared/presentation/redirect-route';

const authRouter = {
	router: [
		{
			path: loginRoute,
			page: lazy(() => import('../../presentation/pages/LoginPage')),
			routeComponent: UnauthenticatedRoute,
		},
	],
};

export default authRouter;
