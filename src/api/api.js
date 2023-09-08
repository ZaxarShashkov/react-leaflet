export const getCoordApi = (coords) => {
	return fetch(`http://router.project-osrm.org/route/v1/car/${coords}?geometries=geojson`);
};
