import { lazy } from 'react';
import { rolsRoute } from './routes';
import { PrivateRoute } from '../../../../shared/presentation/redirect-route';

const rolsRouter = {
	layout: lazy(() => import('../../../../shared/presentation/layouts/AdminLayout')),
	router: [
		{
			path: rolsRoute,
			page: lazy(() => import('../../presentation/pages/ListRolsPage')),
			routeComponent: PrivateRoute,
		},
	],
};

export default rolsRouter;
