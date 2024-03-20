import React from 'react';
import { PropTypes } from 'prop-types';
import './AdminLayout.scss';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';

const AdminLayout = ({ children }) => {
	return (
		<main className='layout-admin-container'>
			<Header />
			<Sidebar />
			<section className='container'>
				{children}	
			</section>
		</main>
	);
};

AdminLayout.propTypes = {
	children: PropTypes.node,
};

export default AdminLayout;
