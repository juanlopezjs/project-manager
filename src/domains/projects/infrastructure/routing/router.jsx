import { lazy } from 'react';
import { projectRoute } from './routes';
import { PrivateRoute } from '../../../../shared/presentation/redirect-route';

const projectsRouter = {
	layout: lazy(() => import('../../../../shared/presentation/layouts/AdminLayout')),
	router: [
		{
			path: projectRoute,
			page: lazy(() => import('../../presentation/pages/ListProjectsPage')),
			routeComponent: PrivateRoute,
		},
	],
};

export default projectsRouter;
