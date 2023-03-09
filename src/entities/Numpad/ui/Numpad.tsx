import styles from './Numpad.module.scss';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';

export const Numpad = () => {
	const numbers = Array.from(Array(10).keys());
	const reversNumbers = numbers.reverse();

	return (
		<div className={styles.numpad}>
			{reversNumbers.map((number) => (
				<Button key={number} text={number} theme={ButtonTheme.NUMPAD} />
			))}
			<Button text={','} />
		</div>
	);
};
