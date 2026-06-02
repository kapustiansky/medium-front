import cl from './Button.module.css';
import { ButtonVariant } from './types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: ButtonVariant;
}

export const Button = ({
	variant,
	children,
	disabled,
	...rest
}: ButtonProps) => {
	return (
		<button
			{...rest}
			disabled={disabled}
			className={`${cl[variant]} ${rest.className || ''}`}
		>
			{children}
		</button>
	);
};
