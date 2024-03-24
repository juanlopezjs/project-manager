import React from 'react';
import { useSelector } from 'react-redux';
import Time from '../../components/Time';
import ProjectReport from '../../components/ProjectReport';
import DetailServer from '../../components/DetailServer';
import { getSelectorCurrentUser } from '../../../../auth/application/selectors/auth';
import CommitServer from '../../components/CommitReport';
import ReleaseResume from '../../components/ReleaseResume';

const DashboardPage = () => {
	const currentUser = useSelector(getSelectorCurrentUser);
	return (
		<section className="dashboard-page-container w- h-auto max-w-screen-2xl">
			<div className="title-container text-2xl font-semibold">Bienvenido/a { currentUser?.name }</div>			
			<div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
				<Time/>
				<ProjectReport />
				<DetailServer />
				<CommitServer />
				<ReleaseResume />
			</div>
		</section>
	);
};

export default DashboardPage;