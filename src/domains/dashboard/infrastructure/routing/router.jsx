import { lazy } from 'react';
import { dashboardRoute } from './routes';
import {  PrivateRoute } from '../../../../shared/presentation/redirect-route';

const exampleRouter = {
	layout: lazy(() => import('../../../../shared/presentation/layouts/AdminLayout')),
	router: [
		{
			path: dashboardRoute,
			page: lazy(() => import('../../presentation/pages/Dashboard')),
			routeComponent: PrivateRoute,
		},
	],
};

export default exampleRouter;
