import React from 'react';
import styles from './Table.module.scss';

const Table = () => {
	return (
		<div className={styles.table}>
			<div className={styles.table__row}>
				<div className={styles.table__col}>Маршрут</div>
				<div className={styles.table__col}>Точка 1 (lat, lng)</div>
				<div className={styles.table__col}>Точка 2 (lat, lng)</div>
				<div className={styles.table__col}>Точка 3 (lat, lng)</div>
			</div>
			<div className={styles.table__row}>
				<div className={styles.table__col}>Маршрут №1</div>
				<div className={styles.table__col}>59.84660399, 30.29496392</div>
				<div className={styles.table__col}>59.82934196, 30.42423701</div>
				<div className={styles.table__col}>59.83567701, 30.38064206</div>
			</div>
			<div className={styles.table__row}>
				<div className={styles.table__col}>Маршрут №2</div>
				<div className={styles.table__col}>59.82934196, 30.42423701</div>
				<div className={styles.table__col}>59.82761295, 30.41705607</div>
				<div className={styles.table__col}>59.84660399, 30.29496392</div>
			</div>
			<div className={styles.table__row}>
				<div className={styles.table__col}>Маршрут №3</div>
				<div className={styles.table__col}>59.83567701, 30.38064206</div>
				<div className={styles.table__col}>59.84660399, 30.29496392</div>
				<div className={styles.table__col}>59.82761295, 30.41705607</div>
			</div>
		</div>
	);
};

export default Table;
