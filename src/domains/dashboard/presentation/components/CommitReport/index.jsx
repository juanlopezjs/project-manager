import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { CategoryScale, Tooltip } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectorCommitReport } from '../../../application/selectors/dashboard';
import { getCommitReport } from '../../../application/slices/dashboard';
import { getMonthName } from '../../../application/helpers/dashboard';

ChartJS.register(CategoryScale, Tooltip);

const CommitServer = () => {
	const dispatch = useDispatch();
	const commitReport = useSelector(getSelectorCommitReport);
	const ref = useRef();

	const options = {
		responsive: true,
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
		labels: commitReport?.map((item) => getMonthName(item.month)),
		datasets: [
			{
				label: `Feat`,
				data: commitReport?.map((item) => item.feat),
				backgroundColor: '#76a9fa',
			},
			{
				label: `Fix`,
				data: commitReport?.map((item) => item.fix),
				backgroundColor: '#5044cb',
			},
		],
	};

	useEffect(() => {
		dispatch(getCommitReport());
	}, [dispatch]);

	return (
		<div className="col-span-12 rounded-xl px-5 pt-5 pb-5 bg-white dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-6 shadow-lg">
			<p className="font-semibold text-lg">Reporte De Commits</p>
			<p className="mt-4 text-sm">
				Total de commits realizados por cada mes diferenciando entre los tag de Ajustes (fix) y Caracteristicas(feat)
			</p>
			<Chart ref={ref} type="bar" data={data} options={options} />
		</div>
	);
};
export default CommitServer;
