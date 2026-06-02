import ErrorText from '@/components/ui/ErrorText/ErrorText';

import cl from './FormField.module.css';

interface IFormFieldProps {
	className?: string;
	label?: string;
	required?: boolean;
	error?: string;
	htmlFor?: string;
	children: React.ReactNode;
}

const FormField = ({
	className = '',
	label,
	required,
	error,
	htmlFor,
	children,
}: IFormFieldProps) => {
	return (
		<fieldset className={`${cl.container} ${className}`}>
			{label && (
				<label className={cl.label} htmlFor={htmlFor}>
					{label} {required && '*'}
				</label>
			)}
			{children}

			{error && <ErrorText text={error} position='left' />}
		</fieldset>
	);
};

export default FormField;
