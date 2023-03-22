import styles from './Actions.module.scss';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {useAppDispatch} from 'shared/helpers/hooks/hooks';
import {setActionType, setResult} from 'features/Calc/model';

export const Actions = () => {
	const actions = ['/', 'x', '-', '+'];
	const dispatch = useAppDispatch();

	return (
		<div className={styles.actions}>
			{actions.map((action) => (
				<Button
					key={action}
					text={action}
					theme={ButtonTheme.ACTIONS}
					onClick={() => {
						dispatch(setActionType(action));
						// dispatch(setResult());
					}}
				/>
			))}
		</div>
	);
};
