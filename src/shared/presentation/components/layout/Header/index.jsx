import React from 'react';
import { Avatar, Dropdown } from 'flowbite-react';
import { useSelector, useDispatch } from 'react-redux';
import { RiNotification4Line } from 'react-icons/ri';
import { deleteUserSession } from '../../../../../domains/auth/application/helpers/auth';
import { history } from '../../../../application/helpers/history';
import { loginRoute } from '../../../../../domains/auth/infrastructure/routing/routes';
import { getSelectorCurrentUser } from '../../../../../domains/auth/application/selectors/auth';
import { setToggleCollapseSidebar } from "../../../../application/slices/app";

const Header = () => {
	const userCurrent = useSelector(getSelectorCurrentUser);
	const dispatch = useDispatch();
	const handleLogout = () => {
		deleteUserSession();
		history.push(loginRoute);
	};

	const handleToggleSidebar = () => {
		dispatch(setToggleCollapseSidebar())
	}

	return (
		<nav className="fixed shadow-lg top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
			<div className="px-3 py-3 lg:px-5 lg:pl-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center justify-start rtl:justify-end">
						<button
							data-drawer-target="logo-sidebar"
							data-drawer-toggle="logo-sidebar"
							aria-controls="logo-sidebar"
							type="button"
							className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							onClick={handleToggleSidebar}
						>
							<span className="sr-only">Open sidebar</span>
							<svg
								className="w-6 h-6"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									clipRule="evenodd"
									fillRule="evenodd"
									d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
								></path>
							</svg>
						</button>
						<a href="https://flowbite.com" className="flex ms-2 md:me-24">
							<img
								src="https://olsoftware.com/wp-content/uploads/2021/04/cropped-Logo-Oficial-OL-Software-230x64.png"
								className="h-8 me-3"
								alt="FlowBite Logo"
							/>
						</a>
					</div>
					<div className="flex items-center">
						<div className="flex items-center ms-3">
							<Dropdown arrowIcon={true} inline label={<RiNotification4Line size={25} />}></Dropdown>
						</div>

						<div className="flex items-center ms-3">
							<Dropdown
								arrowIcon={true}
								inline
								label={
									<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
								}
							>
								<Dropdown.Header>
									<span className="block text-sm">{`${userCurrent?.name} ${userCurrent?.last_name}`}</span>
								</Dropdown.Header>
								<Dropdown.Item onClick={handleLogout}>Cerrar sesion</Dropdown.Item>
							</Dropdown>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
