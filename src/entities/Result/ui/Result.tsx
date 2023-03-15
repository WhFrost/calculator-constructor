import styles from './Result.module.scss';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {useAppDispatch} from 'shared/helpers/hooks/hooks';
import {setResult} from 'features/Calc/model';

export const Result = () => {
	const dispatch = useAppDispatch();
	return (
		<div className={styles.result}>
			<Button
				text={'='}
				theme={ButtonTheme.PRIMARY}
				onClick={() => dispatch(setResult())}
			/>
		</div>
	);
};
