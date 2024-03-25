import { Table, Button } from 'flowbite-react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectorRols } from '../../../application/selectors/rols';
import { getListRols } from '../../../application/slices/rols';
import { getSelectorIsAdmin } from '../../../../auth/application/selectors/auth';

const ListRolsPage = () => {
	const rols = useSelector(getSelectorRols);
	const isAdmin = useSelector(getSelectorIsAdmin);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getListRols());
	}, [dispatch]);

	return (
		<div className="bg-white px-8 pt-7 pb-5 shadow-lg">
			<h1 className="font-semibold text-lg">Roles</h1>
			<div className="flex justify-end mb-10">
				<Button color="primary">Agregar Rol</Button>
			</div>
			<div className="overflow-x-auto">
				<Table>
					<Table.Head>
						<Table.HeadCell>Rol</Table.HeadCell>
						{isAdmin && (
							<Table.HeadCell>
								<span className="sr-only">Edit</span>
							</Table.HeadCell>
						)}
					</Table.Head>
					<Table.Body className="divide-y">
						{rols.map((item, key) => (
							<Table.Row key={key} className="bg-white dark:border-gray-700 dark:bg-gray-800">
								<Table.Cell>{item.name}</Table.Cell>
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

export default ListRolsPage;
