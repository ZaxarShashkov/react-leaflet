import React, { useState, useEffect } from 'react';
import Table from './components/Table/Table';
import './styles/App.scss';
import Map from './components/Map/Map';
import { useDispatch, useSelector } from 'react-redux';
import { getCoord } from './redux/CoordSlice/CoordSlice';

function App() {
	const [coords, setCoords] = useState('');
	const [visible, setVisible] = useState(null);

	const dispatch = useDispatch();

	const { list } = useSelector((state) => state.coords);
	console.log(list);

	useEffect(() => {
		dispatch(getCoord(coords));
		reverseCoordinates();
	}, [coords]);

	const reverseCoordinates = () => {
		const coords = list.routes.map((item) =>
			item.geometry.coordinates.map((coord) => [...coord])
		);
		const reversedCoords = coords.map((item) => item.map((coord) => coord.reverse()));
		setVisible(reversedCoords);
	};

	console.log(visible, 'visible');

	return (
		<div className='App'>
			<div className='wrapper'>
				<Table setCoords={setCoords} reverseCoordinates={reverseCoordinates} />
				<Map coords={coords} visible={visible} />
			</div>
		</div>
	);
}

export default App;
