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
	}, [coords]);

	useEffect(() => {
		if (isLoading) {
			console.log('reversed');
			reverseCoordinates();
		}
	}, [isLoading, coords]);

	const reverseCoordinates = () => {
		const coords = list.routes.map((item) =>
			item.geometry.coordinates.map((coord) => [...coord])
		);
		const reversedCoords = coords.map((item) => item.map((coord) => coord.reverse()));
		setRoutes(reversedCoords);
	};

	// xc = (x1 + x2) / 2, yc = (y1 + y2) / 2

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
