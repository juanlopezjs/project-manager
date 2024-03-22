import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import './Time.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentTime } from '../../../application/slices/dashboard';
import { getSelectorCurrentTime } from '../../../application/selectors/dashboard';

const Time = () => {
	const dispatch = useDispatch();
	const [location, setLocation] = useState(null);
	const currentTime = useSelector(getSelectorCurrentTime);

	const getUserCoordinates = useCallback(() => {
		const geolocationAPI = navigator.geolocation;
		if (geolocationAPI) {
			geolocationAPI.getCurrentPosition(
				(position) => {
					const { coords } = position;
					setLocation({ lat: coords.latitude, lon: coords.longitude });
				},
				(error) => {
					console.log('Something went wrong getting your position!');
				},
			);
		}
	}, []);

	useLayoutEffect(() => {
		getUserCoordinates();
	}, [getUserCoordinates]);

	useEffect(() => {
		if (location) {
			dispatch(getCurrentTime(location));
		}
	}, [dispatch, location]);

	return (
		<div className="time-container col-span-12 rounded-sm px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-6">
			{Object.keys(currentTime).length > 0 ? (
				<>
					<img className="image rounded-xl object-cover object-top lg:object-center" src={`${window.location.origin}/${currentTime.weather[0].icon}.svg`} />
					<div className="time-information">
						<span>
							<img className='w-12' src={`https://openweathermap.org/img/wn/${currentTime.weather[0].icon}@2x.png`} />
						</span>
						<span className="ordinal font-medium text-lg fort md:text-2xl ">
							{`${Math.round(currentTime?.main?.temp)}c` || ''}
						</span>
						<span className="break-words font-medium text-sm md:text-xl">{currentTime?.name}</span>
					</div>
				</>
			) : null}
		</div>
	);
};

export default Time;
