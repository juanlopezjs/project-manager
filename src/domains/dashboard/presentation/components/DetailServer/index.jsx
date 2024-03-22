import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectorCPUreport } from '../../../application/selectors/dashboard';
import { getCPUreport } from '../../../application/slices/dashboard';

Chart.register(CategoryScale);

const DetailServer = () => {
	const dispatch = useDispatch();
	const cpuReport = useSelector(getSelectorCPUreport);
	const ref = useRef();

	const labels = Array.from({ length: 10 }, (_, index) => (index + 1) * 10);
	const options = {
		responsive: true,
		animations: {
			tension: {
				duration: 3000,
				easing: 'linear',
				from: 1,
				to: 0,
				loop: true,
			},
		},
		title: {
			display: false,
			text: 'Sales Charts',
			fontColor: 'white',
		},
		labels: {
			display: false,
		},
		legend: {
			labels: {
				fontColor: 'white',
			},
			align: 'end',
			position: 'bottom',
		},
	};

	const data = {
		labels,
		datasets: [
			{
				label: ``,
				data: cpuReport?.time?.map((item) => item.value),
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
				fill: false,
			},
		],
	};

	useEffect(() => {
		dispatch(getCPUreport());
	}, [dispatch]);

	return (
		<div className="col-span-12 rounded-xl px-5 pt-5 pb-5 bg-white dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-6 shadow-lg">
			<p className="font-semibold text-lg">Detalles Del Servidor</p>
			<p className="mt-4 text-sm">
				El número total de sesiones dentro del rango de fechas. tI si el período en el que un usuario participa activamente
				en su sitio web, página o aplicación. etc.{' '}
			</p>
			<div className="flex gap-4 mt-4 mb-1 items-center">
				<div className="flex flex-col gap-1 justify-center">
					<span className="text-sm text-gray-500">Tiempo de uso</span>
					<span className="text-indigo-700 text-2xl font-semibold">{cpuReport?.percentaje_time}%</span>
				</div>
				<div className="flex flex-col gap-1 justify-center">
					<span className="text-sm text-gray-500">Proyectos desplegados</span>
					<span className="text-indigo-700 text-2xl font-semibold">{cpuReport?.deploys}</span>
				</div>
			</div>
			<Line ref={ref} data={data} options={options} />
		</div>
	);
};
export default DetailServer;
