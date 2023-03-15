import {ButtonHTMLAttributes} from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

export enum ButtonTheme {
	PRIMARY = 'primary',
	NUMPAD = 'numpad',
	ACTIONS = 'actions',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string | number;
	theme?: ButtonTheme;
}

export const Button = ({text, theme, value, ...props}: ButtonProps) => {
	return (
		<button
			className={cn(styles.button, theme ? styles[theme] : '')}
			data-value={value}
			{...props}
		>
			{text}
		</button>
	);
};
