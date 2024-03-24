import React, { Suspense } from 'react';
import { Flowbite } from 'flowbite-react';
import Router from './shared/presentation/Router';
import Loading from './shared/presentation/components/Loading'

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
			<Suspense fallback={<Loading heightScreen={true} />}>
				<Router />
			</Suspense>
		</Flowbite>
	);
};

export default App;
