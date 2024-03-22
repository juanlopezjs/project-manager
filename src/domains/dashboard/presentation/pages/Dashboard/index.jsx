import React from 'react';
import Time from '../../components/Time';
import ProjectReport from '../../components/ProjectReport';

const DashboardPage = () => {
	return (
		<section className="dashboard-page-container w- h-auto max-w-screen-2xl">
			<div className="title-container">Holas</div>			
			<div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
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