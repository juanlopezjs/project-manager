import React from 'react';
import { useHistory } from 'react-router-dom';

const ExamplePage = () => {

	const history = useHistory();
	
	return (
		<div className="example-page">
			<h1>{history.location.pathname}</h1>
			
		
		</div>
	);
};

export default ExamplePage;
