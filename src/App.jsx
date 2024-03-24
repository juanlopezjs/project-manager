import React, { Suspense } from 'react';
import { Flowbite, Spinner } from 'flowbite-react';
import Router from './shared/presentation/Router';

const customTheme = {
	button: {
		color: {
			primary: 'text-white enabled:hover:bg-indigo-800 focus:ring-indigo-300 bg-indigo-700 hover:bg-indigo-800',
		},
	},
};
const App = () => {
	return (
		<Flowbite theme={{ theme: customTheme }}>
			<Suspense fallback={<Spinner size="xl" color="purple" aria-label="Purple spinner example"/>}>
				<Router />
			</Suspense>
		</Flowbite>
	);
};

export default App;
