import styles from './Actions.module.scss';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';

export const Actions = () => {
	const actions = ['/', 'x', '-', '+'];
	return (
		<div className={styles.actions}>
			{actions.map((action) => (
				<Button key={action} text={action} theme={ButtonTheme.ACTIONS} />
			))}
		</div>
	);
};
