import {Actions} from 'entities/Actions';
import {Numpad} from 'entities/Numpad';
import {Result} from 'entities/Result';
import {useAppSelector} from 'shared/helpers/hooks/hooks';
import {Board} from 'shared/ui/Board/Board';
import {getCurrentValue, getResult} from '../model';
import styles from './Calc.module.scss';

export const Calc = () => {
	const result = useAppSelector(getResult);
	const currnetValue = useAppSelector(getCurrentValue);

	return (
		<div className={styles.calc}>
			<Board value={!result ? currnetValue : result} />
			<Actions />
			<Numpad />
			<Result />
		</div>
	);
};
