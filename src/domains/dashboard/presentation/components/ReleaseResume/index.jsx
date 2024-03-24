import React, { useEffect } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { Progress } from 'flowbite-react';
import { getSelectorReleaseResume } from '../../../application/selectors/dashboard';
import { getReleaseResume } from '../../../application/slices/dashboard';
import './ReleaseResume.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const ReleaseResume = () => {
	const dispatch = useDispatch();
	const releaseResume = useSelector(getSelectorReleaseResume);
	const colorArray = ['indigo', 'yellow', 'red', 'blue', 'lime', 'pink'];

	const data = {
		labels: ['Destacadas', 'En Proceso', 'Resueltas'],
		datasets: [
			{
				label: '',
				data: Object.keys(releaseResume).length > 0 ? Object.values(releaseResume.nc_state) : [],
				backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
				borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
			},
		],
	};

	useEffect(() => {
		dispatch(getReleaseResume());
	}, [dispatch]);

	return (
		<div className="release-resume-container col-span-12 rounded-xl bg-white px-8 pt-7 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 shadow-lg">
			<div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3 xl:gap-0">
				<div className="progres-container col-span-3 lg:col-span-2 flex flex-row w-full justify-between gap-6 flex-wrap">
					<div className="flex flex-col w-full lg:flex-1 lg:w-auto items-start gap-4">
						<span className="font-semibold">Entregas</span>
						<span className="text-indigo-700 flex flex-col gap-2">
							<span className="text-4xl ">%{releaseResume?.porcentaje}</span>
							<span className="text-1xl">Próximo ciclo: {releaseResume?.cicle}</span>
						</span>
						<span className="text-gray-700 text-sm">
							El ciclo de entrega se calcula usando las fechas estimadas de los Sprints encada proyecto
						</span>
					</div>
					<div className="grid grid-cols-[auto_50%_auto] flex-1 w-full lg:w-8/12 items-center gap-x-6">
						{releaseResume?.top_projects?.map((item, key) => (
							<>
								<span>{item.name}</span>
								<Progress color={colorArray[key]} size="md" progress={item.porcentaje} />
								<span className="grow-0">{item.porcentaje}%</span>
							</>
						))}
					</div>
				</div>
				<div className="col-span-3 lg:col-span-1 flex min-h-24 lg:items-center justify-center mt-4 ">
					<Doughnut
						data={data}
						options={{
							responsive: true,
							maintainAspectRatio: true,
							aspectRatio: 1.4,
							cutout: '80%',
							layout:{
								padding:20,
							  },
							animation: {
								animateRotate: false,
							},
							plugins: {
								legend: {
									display: true,
									position: 'left',
								},
							},
						}}
					/>
				</div>
			</div>
		</div>
	);
};
export default ReleaseResume;
