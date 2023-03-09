import styles from './Result.module.scss';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';

export const Result = () => {
	return (
		<div className={styles.result}>
			<Button text={'='} theme={ButtonTheme.PRIMARY} />
		</div>
	);
};
