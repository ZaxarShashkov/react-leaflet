import React, { useEffect, useMemo, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, Polyline } from 'react-leaflet';

// import { useDispatch, useSelector } from 'react-redux';
// import { getCoord } from '../../redux/CoordSlice/CoordSlice';

import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.scss';


const Map = ({ coords, routes }) => {

	const [center, setCenter] = useState({ lat: null, lng: null })
	const [markers, setMarkers] = useState([])

	const customIcon = new Icon({
		iconUrl: require('../../image/marker-icon.png'),
		iconSize: [32, 32],
	});

	useEffect(() => {
		if (coords.length !== 0) {
			let arr = coords.split(";");
			let allCoords = arr.map(item => item.split(","));
			setMarkers(allCoords)
			const lat = (Number(allCoords[0][1]) + Number(allCoords[1][1]) + Number(allCoords[2][1])) / 3;
			const lng = (Number(allCoords[0][0]) + Number(allCoords[1][0]) + Number(allCoords[2][0])) / 3;
			setCenter({ lat: lat, lng: lng });
		}
	}, [coords])

	return (
		<>
			<MapContainer center={[59.84660399, 30.29496392]} zoom={12} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				{routes && <Polyline pathOptions={{ color: 'lime' }} positions={routes} />}
				{markers ? markers.map(coord => (
					<Marker position={[Number(coord[1]), Number(coord[0])]} key={coord} icon={customIcon} />
				)) : null}
			</MapContainer>
		</>
	);
};

export default Map;
