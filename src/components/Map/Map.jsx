import React, { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useDispatch, useSelector } from 'react-redux';
import './Map.scss';
import { Icon } from 'leaflet';
import coordReducer, { getCoordSuccess } from '../../redux/CoordSlice/CoordSlice'

const Map = () => {

	const { data, isLoading } = useSelector((state) => state.coordReducer)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCoordSuccess())
	})
	console.log(isLoading, 'asda')
	console.log(data)

	const customIcon = new Icon({
		iconUrl: require('../../image/marker-icon.png'),
		iconSize: [32, 32],
	});

	const polyline = [
		[59.84660399, 30.29496392],
		[59.82934196, 30.42423701],
		[59.83567701, 30.38064206],
	];

	return (
		<>
			<MapContainer center={[59.83567701, 30.38064206]} zoom={13} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Polyline pathOptions={{ color: 'lime' }} positions={polyline} />
				{/* <Marker position={[59.84660399, 30.29496392]} icon={customIcon}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker> */}
			</MapContainer>
		</>
	);
};

export default Map;
