import { Table, Button } from 'flowbite-react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiCheckLine, RiCircleFill } from 'react-icons/ri';
import { getSelectorProjects } from '../../../application/selectors/projects';
import { getListProjects } from '../../../application/slices/projects';
import { getSelectorIsAdmin } from '../../../../auth/application/selectors/auth';

const ListProjectsPage = () => {
	const projects = useSelector(getSelectorProjects);
	const isAdmin = useSelector(getSelectorIsAdmin);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getListProjects());
	}, [dispatch]);

	const renderCheck = (isCheck) => {
		if (isCheck) {
			return <RiCheckLine size={20} color='green'/>;
		} 
			return <RiCircleFill size={20} color='red' />;
		
	};

	return (
		<div className="bg-white px-8 pt-7 pb-5 shadow-lg">
			<h1 className="font-semibold text-lg">Proyectos</h1>
			<div className="flex justify-end mb-10">
				<Button color="primary">Agregar proyecto</Button>
			</div>
			<div className="overflow-x-auto">
				<Table>
					<Table.Head>
						<Table.HeadCell>Proyecto</Table.HeadCell>
						<Table.HeadCell>Cliente</Table.HeadCell>
						<Table.HeadCell>Respositorio</Table.HeadCell>
						<Table.HeadCell>Desarrolladores</Table.HeadCell>
						<Table.HeadCell>CI</Table.HeadCell>
						<Table.HeadCell>CD</Table.HeadCell>
						<Table.HeadCell>Frontend</Table.HeadCell>
						<Table.HeadCell>Backend</Table.HeadCell>
						<Table.HeadCell>DB</Table.HeadCell>
						<Table.HeadCell>Alertas</Table.HeadCell>
						<Table.HeadCell>Errores</Table.HeadCell>
						<Table.HeadCell>Cant. Despliegues</Table.HeadCell>
						<Table.HeadCell>Avance</Table.HeadCell>
						<Table.HeadCell>Reporte NC</Table.HeadCell>
						<Table.HeadCell>Estatus</Table.HeadCell>
						{isAdmin && (
							<Table.HeadCell>
								<span className="sr-only">Edit</span>
							</Table.HeadCell>
						)}
					</Table.Head>
					<Table.Body className="divide-y">
						{projects.map((item, key) => (
							<Table.Row key={key} className="bg-white dark:border-gray-700 dark:bg-gray-800">
								<Table.Cell>{item.project_name}</Table.Cell>
								<Table.Cell>{item.client}</Table.Cell>
								<Table.Cell>{item.repo_url}</Table.Cell>
								<Table.Cell>{item.developers}</Table.Cell>
								<Table.Cell>{renderCheck(item.ci)}</Table.Cell>
								<Table.Cell>{renderCheck(item.cd)}</Table.Cell>
								<Table.Cell>{item.frontend_tecnology}</Table.Cell>
								<Table.Cell>{item.backend_tecnology}</Table.Cell>
								<Table.Cell>{item.databases}</Table.Cell>
								<Table.Cell className="text-yellow-500">{item.warning_count}</Table.Cell>
								<Table.Cell className="text-red-600">{item.errors_count}</Table.Cell>
								<Table.Cell className="text-blue-600">{item.deploy_count}</Table.Cell>
								<Table.Cell className="text-green-600">{item.percentage_completion}</Table.Cell>
								<Table.Cell className="text-red-600">{item.report_nc}</Table.Cell>
								<Table.Cell>
									<p className="bg-yellow-300 rounded-xl p-2">{item.status}</p>
								</Table.Cell>
								{isAdmin && (
									<Table.Cell>
										<a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
											Edit
										</a>
									</Table.Cell>
								)}
							</Table.Row>
						))}
					</Table.Body>
				</Table>
			</div>
		</div>
	);
};

export default ListProjectsPage;
