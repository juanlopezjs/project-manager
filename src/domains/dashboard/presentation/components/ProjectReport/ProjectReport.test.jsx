import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ProjectReport from './index';
import ErrorBoundary from '../../../../../shared/presentation/ErrorBoundary';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('ProjectReport Component', () => {
	let store;

	beforeEach(() => {
		store = mockStore({
			dashboard: {
				developmentCycle: {
					projects: 10,
					projects_dev: 5,
					peding_nc: 3,
					errors_deploy: 2,
				},
			},
		});
	});

	test('renders ProjectReport component', () => {
		const { getByText } = render(
			<Provider store={store}>
				<ErrorBoundary>
					<ProjectReport />
				</ErrorBoundary>
			</Provider>,
		);

		expect(getByText('Proyectos Registrados')).toBeInTheDocument();
		expect(getByText('Proyectos en Desarrollo')).toBeInTheDocument();
		expect(getByText("NC's sin resolver")).toBeInTheDocument();
		expect(getByText('Cantidad de Errores')).toBeInTheDocument();
	});

	test('renders correct project count', () => {
		const { getByText } = render(
			<Provider store={store}>
				<ErrorBoundary>
					<ProjectReport />
				</ErrorBoundary>
			</Provider>,
		);

		expect(getByText('10')).toBeInTheDocument();
	});

	test('renders correct project in development count', () => {
		const { getByText } = render(
			<Provider store={store}>
				<ErrorBoundary>
					<ProjectReport />
				</ErrorBoundary>
			</Provider>,
		);

		expect(getByText('5')).toBeInTheDocument();
	});
});
