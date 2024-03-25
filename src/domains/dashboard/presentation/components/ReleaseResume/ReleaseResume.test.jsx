import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ReleaseResume from './index';
import ErrorBoundary from '../../../../../shared/presentation/ErrorBoundary';

describe('ReleaseResume component', () => {

    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);

	let store;
	beforeEach(() => {
		store = mockStore({
			dashboard: {
				releaseResume: {
					porcentaje: 50,
					cicle: 'Next cycle',
					top_projects: [
						{ name: 'Project 1', porcentaje: 20 },
						{ name: 'Project 2', porcentaje: 30 },
						{ name: 'Project 3', porcentaje: 40 },
					],
					nc_state: {
						destacadas: 10,
						en_proceso: 20,
						resueltas: 30,
					},
				},
			},
		});
	});

	test('renders release resume data correctly', () => {
		render(
			<Provider store={store}>
				<ErrorBoundary>
					<ReleaseResume />
				</ErrorBoundary>
			</Provider>,
		);

		expect(screen.getByText('%50')).toBeInTheDocument();
		expect(screen.getByText('Próximo ciclo: Next cycle')).toBeInTheDocument();

		expect(screen.getByText('Project 1')).toBeInTheDocument();
		expect(screen.getByText('Project 2')).toBeInTheDocument();
		expect(screen.getByText('Project 3')).toBeInTheDocument();
	});
});
