import classNames from 'classnames';
import { Spinner } from 'flowbite-react';
import React from 'react';
import { PropTypes } from 'prop-types';

const Loading = ({ heightScreen = false }) => {
	const className = classNames({
		'h-full': !heightScreen,
		'h-screen': heightScreen,
	});

	return (
		<div className={`flex justify-center items-center ${className}`}>
			<Spinner size="xl" color="purple" aria-label="Purple spinner example" />
		</div>
	);
};

Loading.propTypes = {
	heightScreen: PropTypes.bool,
};

export default Loading;
