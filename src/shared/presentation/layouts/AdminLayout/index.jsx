import React from 'react';
import { PropTypes } from 'prop-types';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';

const AdminLayout = ({ children }) => {
	return (
		<main>
			<Header />
			<Sidebar />
			<section className="p-4 sm:ml-64 bg-slate-50 min-h-screen mt-16">
				<div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">{children}</div>
			</section>
		</main>
	);
};

AdminLayout.propTypes = {
	children: PropTypes.node,
};

export default AdminLayout;
