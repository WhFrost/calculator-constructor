import styles from './Board.module.scss';

interface BoardProps {
	value: number;
}

export const Board = ({value}: BoardProps) => {
	return (
		<div className={styles.board}>
			<div className={styles.value}>{value}</div>
		</div>
	);
};
