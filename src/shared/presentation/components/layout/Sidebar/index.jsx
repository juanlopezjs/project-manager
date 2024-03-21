import React from 'react';
import { RiDashboardLine, RiUserLine, RiContactsLine, RiLayout3Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { dashboardRoute } from '../../../../../domains/dashboard/infrastructure/routing/routes';

const Sidebar = () => {
	return (
		<aside
			id="logo-sidebar"
			className="fixed top-16 border-r-0 left-0 z-40 w-64 h-screen pt-10 transition-transform -translate-x-full border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
			aria-label="Sidebar"
		>
			<div className="h-full px-3 pb-4 overflow-y-auto dark:bg-gray-800">
				<ul className="space-y-2 font-medium">
					<li>
						<Link
							className="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-700 hover:text-white dark:hover:bg-gray-700 group"
							to={dashboardRoute}
						>
							<RiDashboardLine size={20} />
							<span className="ms-3">Dashboard</span>
						</Link>
					</li>
					<li>
						<Link
							to={'/pedro'}
							className="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-700 hover:text-white dark:hover:bg-gray-700 group"
						>
							<RiLayout3Line size={20} />
							<span className="flex-1 ms-3 whitespace-nowrap">Proyectos</span>
						</Link>
					</li>
					<li>
						<Link className="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-700 hover:text-white dark:hover:bg-gray-700 group">
							<RiUserLine size={20} />
							<span className="flex-1 ms-3 whitespace-nowrap">Usuarios</span>
						</Link>
					</li>
					<li>
						<Link className="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-700 hover:text-white dark:hover:bg-gray-700 group">
							<RiContactsLine size={20} />
							<span className="flex-1 ms-3 whitespace-nowrap">Roles</span>
						</Link>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
