import React from 'react';
import { RiDashboardLine, RiUserLine, RiContactsLine, RiLayout3Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from "classnames";
import { dashboardRoute } from '../../../../../domains/dashboard/infrastructure/routing/routes';
import { usersRoute } from '../../../../../domains/users/infrastructure/routing/routes';
import { getSelectorCollapseSidebar } from '../../../../application/selectors/app';

const Sidebar = () => {
	const collapseSidebar = useSelector(getSelectorCollapseSidebar);
	const className = classNames({
		'translate-x-0': collapseSidebar
	})
	
	return (
		<aside
			id="logo-sidebar"
			className={`fixed top-16 border-r-0 left-0 z-40 bg-white w-64 h-screen pt-10 transition-transform -translate-x-full border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 ${className}`}
			aria-label="Sidebar"
		>
			<div className="h-full px-3 pb-4 overflow-y-auto dark:bg-gray-800">
				<ul className="space-y-2 font-medium">
					<li>
						<NavLink
							to={dashboardRoute}
							className="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-700 hover:text-white dark:hover:bg-gray-700 group"
							activeClassName="bg-indigo-700 text-white"
							exact
						>
							<RiDashboardLine size={20} />
							<span className="ms-3">Dashboard</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/pedro'}
							activeClassName="bg-indigo-700 text-white"
							exact
							className="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-700 hover:text-white dark:hover:bg-gray-700 group"
						>
							<RiLayout3Line size={20} />
							<span className="flex-1 ms-3 whitespace-nowrap">Proyectos</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to={usersRoute}
							activeClassName="bg-indigo-700 text-white"
							exact
							className="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-700 hover:text-white dark:hover:bg-gray-700 group"
						>
							<RiUserLine size={20} />
							<span className="flex-1 ms-3 whitespace-nowrap">Usuarios</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/pedro'}
							activeClassName="bg-indigo-700 text-white"
							exact
							className="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-700 hover:text-white dark:hover:bg-gray-700 group"
						>
							<RiContactsLine size={20} />
							<span className="flex-1 ms-3 whitespace-nowrap">Roles</span>
						</NavLink>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
