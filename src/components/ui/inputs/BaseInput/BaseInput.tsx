import cl from './BaseInput.module.css';

interface BaseInputProps extends React.ComponentPropsWithRef<'input'> {
	error?: string;
	onValueChange?: (value: string) => void;
}

const BaseInput = ({
	className = '',
	onChange,
	onValueChange,
	error,
	ref,
	...attr
}: BaseInputProps) => {
	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		onChange?.(event);
		onValueChange?.(event.target.value);
	};

	const inputClassName = `${cl.input} ${error ? cl.error : ''} ${className}`;

	return (
		<input
			{...attr}
			ref={ref}
			className={inputClassName}
			onChange={handleChange}
		/>
	);
};

export default BaseInput;
