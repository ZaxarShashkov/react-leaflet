import React, { useEffect, useMemo, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, Polyline } from 'react-leaflet';

import { useDispatch, useSelector } from 'react-redux';
import { getCoord } from '../../redux/CoordSlice/CoordSlice';

import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.scss';


const Map = () => {

	const [visible, setVisible] = useState(null)

	const dispatch = useDispatch()

	const { list } = useSelector((state) => state.coords)

	useEffect(() => {
		dispatch(getCoord())
	}, []);


	const customIcon = new Icon({
		iconUrl: require('../../image/marker-icon.png'),
		iconSize: [32, 32],
	});

	const reverseCoordinates = () => {
		const coords = list.routes.map((item) =>
			item.geometry.coordinates.map((coord) => [...coord])
		);
		const reversedCoords = coords.map((item) =>
			item.map((coord) => coord.reverse())
		);
		setVisible(reversedCoords)
	};


	return (
		<>
			<button onClick={reverseCoordinates}></button>
			<MapContainer center={[59.847374, 30.296654]} zoom={13} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				{visible && <Polyline pathOptions={{ color: 'lime' }} positions={visible} />}
				<Marker position={[59.84660399, 30.29496392]} icon={customIcon}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
				<Marker position={[59.82934196, 30.42423701]} icon={customIcon}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
				<Marker position={[59.83567701, 30.38064206]} icon={customIcon}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</>
	);
};

export default Map;
