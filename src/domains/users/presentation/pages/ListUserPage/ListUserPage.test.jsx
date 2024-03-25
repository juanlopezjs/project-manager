import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Para tener acceso a las aserciones personalizadas de jest-dom
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import ListUserPage from './index';
import ErrorBoundary from '../../../../../shared/presentation/ErrorBoundary';

// Mock de los datos de usuarios para simular el estado de Redux
const mockUsers = [
	{
		id: 1,
		name: 'John',
		last_name: 'Doe',
		rol: 'Admin',
		list: 'React, Redux',
		area: 'Development',
		url_foto: 'john.jpg',
	},
	{ id: 2, name: 'Jane', last_name: 'Smith', rol: 'User', list: 'React, Vue', area: 'Design', url_foto: 'jane.jpg' },
];

const middlewares = [thunk];
const initialState = {};

const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

// Mock de la función dispatch para simular las acciones de Redux
jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useDispatch: () => jest.fn(),
}));

// Mock de la función useSelector para proporcionar datos simulados del estado de Redux
jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useSelector: jest.fn(),
}));

describe('ListUserPage', () => {
	beforeEach(() => {
        useSelector.mockReturnValue(mockUsers); // Mock de useSelector para devolver los datos de usuarios simulados
	});

    it('renders user list correctly', async () => {

		render(
			<Provider store={store}>
				<ErrorBoundary>
					<ListUserPage />
				</ErrorBoundary>
			</Provider>,
		);

		// Verificar que el título "Usuarios" esté presente
		expect(screen.getByText('Usuarios')).toBeInTheDocument();

		// Verificar que el botón "Agregar Usuario" esté presente
		expect(screen.getByRole('button', { name: 'Agregar Usuario' })).toBeInTheDocument();

		// Verificar que los nombres de los usuarios estén presentes
		expect(screen.getByText('John')).toBeInTheDocument();
		expect(screen.getByText('Doe')).toBeInTheDocument();
        waitFor(() => {
		// Verificar que los enlaces de edición estén presentes solo si el usuario es admin
            expect(screen.queryByText('Edit')).toBeNull(); // No debe estar presente si el usuario no es admin
        });
	});
});
