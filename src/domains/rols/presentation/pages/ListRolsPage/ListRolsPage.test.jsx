import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ListRolsPage from './index';
import ErrorBoundary from '../../../../../shared/presentation/ErrorBoundary';

// Mock del estado de Redux
const initialState = {
    rols: {
        rols: [
            { id: 1, name: 'Admin' },
            { id: 2, name: 'User' },
        ],
    },
    auth: {
        currentUser: {
            rol: 'Admin',
        }
	},
};

// Función mock de la acción getListRols
const mockGetListRols = jest.fn();
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

describe('ListRolsPage', () => {
	beforeEach(() => {
		render(
			<Provider store={store}>
				<ErrorBoundary>
					<ListRolsPage />
				</ErrorBoundary>
			</Provider>,
		);
	});

	it('should render the roles', () => {
		expect(screen.getByText('Admin')).toBeInTheDocument();
		expect(screen.getByText('User')).toBeInTheDocument();
	});

	it('should render the "Agregar Rol" button', () => {
		expect(screen.getByRole('button', { name: 'Agregar Rol' })).toBeInTheDocument();
	});

    it('should call getListRols action on mount', async() => {
        waitFor(() => {
            expect(mockGetListRols).toHaveBeenCalled();
        });
     });
    
    it('should render the edit link for admin users', async () => {
        waitFor(() => {
            expect(screen.getByText('Edit')).toBeInTheDocument();
        });
    });
});
