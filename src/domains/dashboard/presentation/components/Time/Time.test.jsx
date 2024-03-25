import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import Time from './index';

// Mock para useDispatch y useSelector
jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useDispatch: jest.fn(),
	useSelector: jest.fn(),
}));

describe('Time component', () => {
	beforeEach(() => {
		useDispatch.mockClear();
		useSelector.mockClear();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('renders loading component when loading is true', async () => {
		useSelector.mockReturnValue(true); // Simula que loading es true
		render(<Time />);
		await waitFor(() => {
			expect(screen.getByTestId('loading-component')).toBeInTheDocument();
		});
	});
});
