import { lazy } from 'react';
import { usersRoute } from './routes';
import { PrivateRoute } from '../../../../shared/presentation/redirect-route';

const usersRouter = {
	layout: lazy(() => import('../../../../shared/presentation/layouts/AdminLayout')),
	router: [
		{
			path: usersRoute,
			page: lazy(() => import('../../presentation/pages/ListUserPage')),
			routeComponent: PrivateRoute,
		},
	],
};

export default usersRouter;
