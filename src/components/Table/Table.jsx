import React from 'react';
import styles from './Table.module.scss';

const Table = ({ setCoords }) => {

	const handleClick = (e) => {
		console.log(e.currentTarget.dataset.value)
		setCoords(e.currentTarget.dataset.value)
	}

	return (
		<div className={styles.table}>
			<div className={styles.table__row}>
				<div className={styles.table__col}>Маршрут</div>
				<div className={styles.table__col}>Точка 1 (lat, lng)</div>
				<div className={styles.table__col}>Точка 2 (lat, lng)</div>
				<div className={styles.table__col}>Точка 3 (lat, lng)</div>
			</div>
			<div className={styles.table__row} data-value='30.29496392,59.84660399;30.42423701,59.82934196;30.38064206,59.83567701' onClick={handleClick}>
				<div className={styles.table__col}>Маршрут №1</div>
				<div className={styles.table__col}>59.84660399, 30.29496392</div>
				<div className={styles.table__col}>59.82934196, 30.42423701</div>
				<div className={styles.table__col}>59.83567701, 30.38064206</div>
			</div>
			<div className={styles.table__row} data-value='30.42423701,59.82934196;30.41705607,59.82761295;30.29496392,59.84660399' onClick={handleClick}>
				<div className={styles.table__col}>Маршрут №2</div>
				<div className={styles.table__col}>59.82934196, 30.42423701</div>
				<div className={styles.table__col}>59.82761295, 30.41705607</div>
				<div className={styles.table__col}>59.84660399, 30.29496392</div>
			</div>
			<div className={styles.table__row} data-value='30.38064206,59.83567701;30.29496392,59.84660399;30.41705607,59.82761295' onClick={handleClick}>
				<div className={styles.table__col}>Маршрут №3</div>
				<div className={styles.table__col}>59.83567701, 30.38064206</div>
				<div className={styles.table__col}>59.84660399, 30.29496392</div>
				<div className={styles.table__col}>59.82761295, 30.41705607</div>
			</div>
		</div>
	);
};

export default Table;
