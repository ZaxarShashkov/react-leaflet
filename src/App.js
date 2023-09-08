import React, { useState, useEffect, useCallback } from 'react';
import Table from './components/Table/Table';
import './styles/App.scss';
import Map from './components/Map/Map';
import { useDispatch, useSelector } from 'react-redux';
import { getCoord } from './redux/CoordSlice/CoordSlice';

function App() {
	const [coords, setCoords] = useState('');
	const [routes, setRoutes] = useState(null);

	const dispatch = useDispatch();

	const { list, isLoading } = useSelector((state) => state.coords);

	useEffect(() => {
		dispatch(getCoord(coords));
		if (isLoading) {
			reverseCoordinates();
		}
	}, [coords, isLoading, dispatch]);

	// useEffect(() => {
	// 	if (isLoading) {
	// 		reverseCoordinates();
	// 	}
	// }, [isLoading, coords]);

	const reverseCoordinates = () => {
		const coords = list.routes.map((item) =>
			item.geometry.coordinates.map((coord) => [...coord])
		);
		const reversedCoords = coords.map((item) => item.map((coord) => coord.reverse()));
		setRoutes(reversedCoords);
	};

	return (
		<div className='App'>
			<div className='wrapper'>
				<Table setCoords={setCoords} reverseCoordinates={reverseCoordinates} />
				<Map coords={coords} routes={routes} />
			</div>
		</div>
	);
}

export default App;
