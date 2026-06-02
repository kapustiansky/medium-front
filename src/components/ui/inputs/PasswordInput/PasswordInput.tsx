import { useState } from 'react';

import cl from './PasswordInput.module.css';

interface PasswordInputProps extends React.ComponentPropsWithRef<'input'> {
	error?: string;
	onValueChange?: (value: string) => void;
}

const PasswordInput = ({
	className = '',
	onChange,
	onValueChange,
	error,
	ref,
	...attr
}: PasswordInputProps) => {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		onChange?.(event);
		onValueChange?.(event.target.value);
	};

	const inputClassName = `${cl.input} ${error ? cl.error : ''} ${className}`;

	return (
		<div className={cl.container}>
			<input
				type={showPassword ? 'text' : 'password'}
				ref={ref}
				className={inputClassName}
				onChange={handleChange}
				{...attr}
			/>

			<button
				type='button'
				className={cl.toggleButton}
				onClick={togglePasswordVisibility}
				aria-label={showPassword ? 'Show password' : 'Hide password'}
			>
				{showPassword ? 'Hide' : 'Show'}
			</button>
		</div>
	);
};

export default PasswordInput;
