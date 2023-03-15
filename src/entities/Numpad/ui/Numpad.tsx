import styles from './Numpad.module.scss';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {useAppDispatch} from 'shared/helpers/hooks/hooks';
import {setCurrentValue} from 'features/Calc/model';

export const Numpad = () => {
	const numbers = Array.from(Array(10).keys());
	const reversNumbers = numbers.reverse();

	const dispatch = useAppDispatch();

	return (
		<div className={styles.numpad}>
			{reversNumbers.map((number) => (
				<Button
					key={number}
					text={number}
					theme={ButtonTheme.NUMPAD}
					value={number}
					onClick={() => dispatch(setCurrentValue(String(number)))}
				/>
			))}
			<Button
				text={','}
				value={','}
				onClick={() => dispatch(setCurrentValue(','))}
			/>
		</div>
	);
};
