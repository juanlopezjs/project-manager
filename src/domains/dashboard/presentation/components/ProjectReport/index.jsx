import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDashboardCards } from '../../../application/slices/dashboard';
import { getSelectorDevelopmentCycle } from '../../../application/selectors/dashboard';

const ProjectReport = () => {
	const dispatch = useDispatch();
	const developmentCycle = useSelector(getSelectorDevelopmentCycle);
	
	useEffect(() => {
		dispatch(getDashboardCards());
	}, [dispatch])
	
	return (
		<div className="col-span-12 rounded-sm p-7.5 dark:border-strokedark dark:bg-boxdark xl:col-span-6 ">
			<div className="grid grid-cols-1 grid-rows-2 gap-4 lg:grid-cols-2">
				<div className="md:max-h-40 bg-blue-400 rounded-xl text-white p-4 flex flex-col gap-2 shadow-lg">
					<div className="text-white ">Proyectos Registrados</div>
					<div className="text-white text-2xl mt-2">{ developmentCycle?.projects }</div>
					<div className="text-white ">Ultimo proyecto registrado hace </div>
				</div>
				<div className="md:max-h-40 bg-violet-900 rounded-xl text-white p-4 flex flex-col gap-2 shadow-lg">
					<div className="text-white ">Proyectos en Desarrollo</div>
					<div className="text-white text-2xl mt-2">{ developmentCycle?.projects_dev }</div>
					<div className="text-white ">Total de avance 22.00% </div>
				</div>
				<div className="md:max-h-40 bg-violet-400 rounded-xl text-white p-4 flex flex-col gap-2 shadow-lg">
					<div className="text-white ">NC{"'"}s sin resolver</div>
					<div className="text-white text-2xl mt-2">{ developmentCycle?.peding_nc }</div>
					<div className="text-white ">Última NC registrada hace </div>
				</div>
				<div className="md:max-h-40 bg-red-400 rounded-xl text-white p-4 flex flex-col gap-2 shadow-lg">
					<div className="text-white ">Cantidad de Errores</div>
					<div className="text-white text-2xl mt-2">{ developmentCycle?.errors_deploy }</div>
					<div className="text-white ">Último error hace 2 horas</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectReport;
