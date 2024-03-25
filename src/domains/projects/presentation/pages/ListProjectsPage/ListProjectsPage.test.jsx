import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ListProjectsPage from './index';
import ErrorBoundary from '../../../../../shared/presentation/ErrorBoundary';

const middlewares = [thunk];
const initialState = {
	auth: {
		currentUser: {
			rol: 'Admin',
		},
	},
	project: {
		projects: [
			{
				project_name: 'Proyecto 1',
				client: 'Cliente 1',
				repo_url: 'https://github.com/proyecto1',
				developers: 'Desarrollador 1',
				ci: true,
				cd: false,
				frontend_tecnology: 'React',
				backend_tecnology: 'Node.js',
				databases: 'MongoDB',
				warning_count: 0,
				errors_count: 1,
				deploy_count: 3,
				percentage_completion: '70%',
				report_nc: 'Reporte 1',
				status: 'En proceso',
			},
		],
	},
};

const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

describe('ListProjectsPage', () => {
	it('renders project list correctly', () => {
		render(
			<Provider store={store}>
				<ErrorBoundary>
					<ListProjectsPage />
				</ErrorBoundary>
			</Provider>,
		);

		expect(screen.getByText('Proyectos')).toBeInTheDocument();
		expect(screen.getByText('Proyecto')).toBeInTheDocument();
		expect(screen.getByText('Cliente')).toBeInTheDocument();
		expect(screen.getByText('Respositorio')).toBeInTheDocument();

		expect(screen.getByRole('button', { name: 'Agregar proyecto' })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'Edit' })).toBeInTheDocument();
	});

	it('displays correct icon based on project status', () => {
		render(
			<Provider store={store}>
				<ErrorBoundary>
					<ListProjectsPage />
				</ErrorBoundary>
			</Provider>,
		);

		expect(screen.getByTestId('check-icon')).toBeInTheDocument();
		expect(screen.getByTestId('circle-icon')).toBeInTheDocument();
	});

	it('displays correct warning and error counts', () => {
		render(
			<Provider store={store}>
				<ErrorBoundary>
					<ListProjectsPage />
				</ErrorBoundary>
			</Provider>,
		);

		expect(screen.getByText('0')).toBeInTheDocument();
		expect(screen.getByText('1')).toBeInTheDocument();
	});
});
