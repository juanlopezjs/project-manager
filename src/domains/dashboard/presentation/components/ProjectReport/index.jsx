import React from 'react';

const ProjectReport = () => {
	return (
		<div className="grid grid-cols-1 grid-rows-2 gap-4 lg:grid-cols-2">
			<div className="md:max-h-40 bg-blue-400 rounded-xl text-white p-4 flex flex-col gap-2">
				<div className="text-white ">Proyectos Registrados</div>
				<div className="text-white text-2xl mt-2">50</div>
				<div className="text-white ">Ultimo proyecto registrado hace </div>
			</div>
			<div className="md:max-h-40 bg-violet-900 rounded-xl text-white p-4 flex flex-col gap-2">
				<div className="text-white ">Proyectos en Desarrollo</div>
				<div className="text-white text-2xl mt-2">12</div>
				<div className="text-white ">Total de avance 22.00% </div>
			</div>
			<div className="md:max-h-40 bg-violet-400 rounded-xl text-white p-4 flex flex-col gap-2">
                <div className="text-white ">NC{"'"}s sin resolver</div>
				<div className="text-white text-2xl mt-2">24</div>
				<div className="text-white ">Última NC registrada hace </div>
			</div>
			<div className="md:max-h-40 bg-red-400 rounded-xl text-white p-4 flex flex-col gap-2">
				<div className="text-white ">Cantidad de Errores</div>
				<div className="text-white text-2xl mt-2">502</div>
				<div className="text-white ">Último error hace 2 horas</div>
			</div>
		</div>
	);
};

export default ProjectReport;
