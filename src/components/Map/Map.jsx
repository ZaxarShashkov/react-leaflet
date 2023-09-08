import React, { useEffect, useMemo, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, Polyline } from 'react-leaflet';

// import { useDispatch, useSelector } from 'react-redux';
// import { getCoord } from '../../redux/CoordSlice/CoordSlice';

import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.scss';


const Map = ({ coords, routes }) => {

	const customIcon = new Icon({
		iconUrl: require('../../image/marker-icon.png'),
		iconSize: [32, 32],
	});

	return (
		<>
			<MapContainer center={[59.847374, 30.296654]} zoom={13} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				{routes && <Polyline pathOptions={{ color: 'lime' }} positions={routes} />}
				<Marker position={[59.84660399, 30.29496392]} icon={customIcon}>
				</Marker>
				<Marker position={[59.82934196, 30.42423701]} icon={customIcon}>

				</Marker>
				<Marker position={[59.83567701, 30.38064206]} icon={customIcon}>
				</Marker>
			</MapContainer>
		</>
	);
};

export default Map;
