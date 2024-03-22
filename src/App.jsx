import React from 'react';
import { Flowbite } from 'flowbite-react';
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
			<Router />
		</Flowbite>
	);
};

export default App;
