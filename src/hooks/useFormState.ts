import { useState } from 'react';

import { FORM_ERROR_KEY } from '@/services/handleApiError';
import { ApiErrors } from '@/types';

type FormShape = Record<string, string>;

type UseFormStateResult<TForm extends FormShape> = {
	form: TForm;
	setForm: React.Dispatch<React.SetStateAction<TForm>>;
	error: ApiErrors<keyof TForm & string> | null;
	setError: React.Dispatch<
		React.SetStateAction<ApiErrors<keyof TForm & string> | null>
	>;
	loading: boolean;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	handleInputChange: (name: keyof TForm & string, value: string) => void;
	resetForm: () => void;
};

const useFormState = <TForm extends FormShape>(
	initialForm: TForm
): UseFormStateResult<TForm> => {
	type Field = keyof TForm & string;
	type FormErrors = ApiErrors<Field>;

	const [form, setForm] = useState(initialForm);
	const [error, setError] = useState<FormErrors | null>(null);
	const [loading, setLoading] = useState(false);

	const handleInputChange = (name: Field, value: string) => {
		setForm((previousForm) => ({
			...previousForm,
			[name]: value,
		}));

		setError((previousError) => {
			if (!previousError) return previousError;
			if (previousError[FORM_ERROR_KEY]) return null;
			if (!previousError[name]) return previousError;

			const remainingErrors: FormErrors = {
				...previousError,
			};

			delete remainingErrors[name];
			return remainingErrors;
		});
	};

	const resetForm = () => {
		setForm(initialForm);
	};

	return {
		form,
		setForm,
		error,
		setError,
		loading,
		setLoading,
		handleInputChange,
		resetForm,
	};
};

export default useFormState;
