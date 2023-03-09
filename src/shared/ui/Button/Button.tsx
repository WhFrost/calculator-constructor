import cn from 'classnames';
import styles from './Button.module.scss';

export enum ButtonTheme {
	PRIMARY = 'primary',
	NUMPAD = 'numpad',
	ACTIONS = 'actions',
}

interface ButtonProps {
	text?: string | number;
	theme?: ButtonTheme;
}

export const Button = ({text, theme}: ButtonProps) => {
	return (
		<button className={cn(styles.button, theme ? styles[theme] : '')}>
			{text}
		</button>
	);
};
