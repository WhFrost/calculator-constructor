import {Actions} from 'entities/Actions';
import {Numpad} from 'entities/Numpad';
import {Result} from 'entities/Result';
import {Board} from 'shared/ui/Board/Board';
import styles from './Calc.module.scss';

export const Calc = () => {
	return (
		<div className={styles.calc}>
			<Board value={10} />
			<Actions />
			<Numpad />
			<Result />
		</div>
	);
};
