import cl from './Button.module.css';
import { ButtonVariant } from './types';

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	variant: ButtonVariant;
	disabled?: boolean;
}

export const ButtonLink = ({
	variant,
	children,
	disabled,
	onClick,
	...rest
}: ButtonLinkProps) => {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (disabled) {
			e.preventDefault();
			return;
		}
		onClick?.(e);
	};

	return (
		<a
			{...rest}
			aria-disabled={disabled}
			onClick={handleClick}
			className={`${cl[variant]} ${rest.className || ''}`}
		>
			{children}
		</a>
	);
};
