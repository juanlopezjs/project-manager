import React from 'react';
import Time from '../../components/Time';
import './DashboardPage.scss';
import ProjectReport from '../../components/ProjectReport';

const DashboardPage = () => {
	return (
		<section className="dashboard-page-container w- h-auto max-w-screen-2xl">
			<div className="title-container">Holas</div>
			<div className="grid-container grid grid-cols-1 md:grid-cols-2 gap-4">
				<Time/>
				<ProjectReport />
				<div className="detail-server-container"></div>
				<div className="report-commits-container"></div>
				<div className="grid grid-cols-1 gap-4 col-span-2">
					<div className="deploys-container h-auto max-w-full bg-red"> asdasd</div>
				</div>
			</div>
		</section>
	);
};

export default DashboardPage;