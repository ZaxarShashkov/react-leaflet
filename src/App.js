import React from 'react';
import Table from './components/Table/Table';
import './styles/App.scss';
import Map from './components/Map/Map';

function App() {
	return (
		<div className='App'>
			<div className='wrapper'>
				<Table />
				<Map />
			</div>
		</div>
	);
}

export default App;
