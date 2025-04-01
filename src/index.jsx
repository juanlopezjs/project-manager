import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import stores from './shared/application/store';
import { history } from './shared/application/helpers/history';
import ErrorBoundary from './shared/presentation/ErrorBoundary';

import './index.scss';


ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={stores}>
		<React.StrictMode>
			<Router history={history}>
				<ErrorBoundary>{history && stores && <App />}</ErrorBoundary>
			</Router>
		</React.StrictMode>
	</Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
