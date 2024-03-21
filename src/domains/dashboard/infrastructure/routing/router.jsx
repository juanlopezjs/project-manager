import AdminLayout from '../../../../shared/presentation/layouts/AdminLayout';
import DashboardPage from '../../presentation/pages/Dashboard';
import { dashboardRoute } from './routes';
import { UnauthenticatedRoute } from '../../../../shared/presentation/redirect-route';

const exampleRouter = {
	layout: AdminLayout,
	router: [
		{
			path: dashboardRoute,
			page: DashboardPage,
			routeComponent: UnauthenticatedRoute,
		},
	],
};

export default exampleRouter;
