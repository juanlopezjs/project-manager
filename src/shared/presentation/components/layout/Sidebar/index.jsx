import React from 'react';
import { Sidebar as SidebarComponent } from 'flowbite-react';
import { RiDashboardLine, RiUserLine, RiContactsLine, RiLayout3Line } from 'react-icons/ri';
import './Sidebar.scss';

const Sidebar = () => {
	return (
		<SidebarComponent aria-label="Default sidebar example" className="sidebar-container">
			<SidebarComponent.Items>
				<SidebarComponent.ItemGroup>
					<SidebarComponent.Item href="#" icon={RiDashboardLine}>
						Dashboard
					</SidebarComponent.Item>
					<SidebarComponent.Item href="#" icon={RiLayout3Line}>
						Proyectos
					</SidebarComponent.Item>
					<SidebarComponent.Item href="#" icon={RiUserLine}>
						Usuarios
					</SidebarComponent.Item>
					<SidebarComponent.Item href="#" icon={RiContactsLine}>
						Roles
					</SidebarComponent.Item>
				</SidebarComponent.ItemGroup>
			</SidebarComponent.Items>
		</SidebarComponent>
	);
};

export default Sidebar;
