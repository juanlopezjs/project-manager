import { Table, Button, Avatar } from 'flowbite-react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectorUsers } from '../../../application/selectors/users';
import { getListUser } from '../../../application/slices/users';
import { getSelectorIsAdmin } from '../../../../auth/application/selectors/auth';

const ListUserPage = () => {
	const users = useSelector(getSelectorUsers);
	const isAdmin = useSelector(getSelectorIsAdmin);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getListUser());
	}, [dispatch]);

	return (
		<div className="bg-white px-8 pt-7 pb-5 shadow-lg">
			<h1 className="font-semibold text-lg">Usuarios</h1>
			<div className="flex justify-end mb-10">
				<Button color="primary">Agregar Usuario</Button>
			</div>
			<div className="overflow-x-auto">
				<Table>
					<Table.Head>
						<Table.HeadCell></Table.HeadCell>
						<Table.HeadCell>Nombre</Table.HeadCell>
						<Table.HeadCell>Apellido</Table.HeadCell>
						<Table.HeadCell>Rol</Table.HeadCell>
						<Table.HeadCell>Tecnologías</Table.HeadCell>
						<Table.HeadCell>Area</Table.HeadCell>
						{isAdmin && (
							<Table.HeadCell>
								<span className="sr-only">Edit</span>
							</Table.HeadCell>
						)}
					</Table.Head>
					<Table.Body className="divide-y">
						{users.map((item, key) => (
							<Table.Row key={key} className="bg-white dark:border-gray-700 dark:bg-gray-800">
								<Table.Cell>
									<Avatar image={item.url_foto} rounded />
								</Table.Cell>
								<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{item.name}</Table.Cell>
								<Table.Cell>{item.last_name}</Table.Cell>
								<Table.Cell>{item.rol}</Table.Cell>
								<Table.Cell>{item.list}</Table.Cell>
								<Table.Cell>{item.area}</Table.Cell>
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

export default ListUserPage;
