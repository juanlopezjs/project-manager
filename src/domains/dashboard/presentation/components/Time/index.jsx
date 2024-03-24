import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import './Time.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'flowbite-react';
import { getCurrentTime } from '../../../application/slices/dashboard';
import { getSelectorCurrentTime, getSelectorLoader } from '../../../application/selectors/dashboard';

const Time = () => {
	const dispatch = useDispatch();
	const [location, setLocation] = useState(null);
	const currentTime = useSelector(getSelectorCurrentTime);
	const loading = useSelector(getSelectorLoader);

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
		<div className="time-container col-span-12 rounded-xl pt-7.5 dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-6 shadow-lg">
			{loading ? (
				<div className="flex justify-center items-center h-full">
					<Spinner size="xl" color="purple" aria-label="Purple spinner example" />
				</div>
			) : (
				<>
					<img
						className="image rounded-xl aspect-auto object-cover object-top lg:object-center"
						src={`${window.location.origin}/${currentTime.weather[0].icon}.svg`}
					/>
					<div className="time-information bg-indigo-600 shadow-lg rounded-lg px-4">
						<span>
							<img className="w-12" src={`https://openweathermap.org/img/wn/${currentTime.weather[0].icon}@2x.png`} />
						</span>
						<span className={`ordinal font-medium font-semibold text-white text-lg fort md:text-2xl`}>
							{`${Math.round(currentTime?.main?.temp)}c` || ''}
						</span>
						<span className={`break-words font-medium text-white text-sm md:text-lg`}>{currentTime?.name}</span>
					</div>
				</>
			)}
		</div>
	);
};

export default Time;
