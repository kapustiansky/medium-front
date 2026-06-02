import { ApiErrors } from '@/types';

export const FORM_ERROR_KEY = 'form';

type HandleApiErrorOptions<TErrors> = {
	setError?: (errors: TErrors) => void;
	fallbackMessage?: string;
};

const isObject = (value: unknown): value is Record<string, unknown> =>
	typeof value === 'object' && value !== null;

const NON_FIELD_ERROR_KEYS = new Set(['Error: ', 'error', 'errors', 'message']);

export const handleApiError = async <TErrors = unknown>(
	res: Response,
	options: HandleApiErrorOptions<TErrors> = {}
): Promise<never> => {
	const {
		setError,
		fallbackMessage = 'An error occurred while fetching the data',
	} = options;

	let errorMessage = fallbackMessage;

	try {
		const contentType = res.headers.get('content-type');

		if (contentType?.includes('application/json')) {
			const errorResponse: unknown = await res.json();
			const responseMessage =
				isObject(errorResponse) && typeof errorResponse.message === 'string'
					? errorResponse.message
					: undefined;

			if (isObject(errorResponse) && 'errors' in errorResponse && setError) {
				const normalizedErrors = normalizeApiErrors(
					errorResponse.errors,
					responseMessage
				);
				if (normalizedErrors) setError(normalizedErrors as TErrors);
			}

			if (responseMessage) errorMessage = responseMessage;
			else if (isObject(errorResponse) && 'errors' in errorResponse)
				errorMessage = JSON.stringify(errorResponse.errors);
		} else {
			const errorText = await res.text();
			if (errorText) errorMessage = errorText;
		}
	} catch {
		errorMessage = fallbackMessage;
	}

	throw new Error(errorMessage);
};

const toErrorMessage = (value: unknown): string | null => {
	if (typeof value === 'string') return value.trim() || null;
	if (Array.isArray(value)) return value.filter(Boolean).join(', ') || null;
	return null;
};

const normalizeApiErrors = <TField extends string>(
	errors: unknown,
	message?: string
): ApiErrors<TField> | null => {
	if (!isObject(errors) && !message) return null;

	const normalizedErrors: ApiErrors<TField> = {};

	if (isObject(errors))
		for (const [key, value] of Object.entries(errors)) {
			const normalizedMessage = toErrorMessage(value);
			if (!normalizedMessage) continue;

			if (NON_FIELD_ERROR_KEYS.has(key)) {
				normalizedErrors[FORM_ERROR_KEY] = normalizedMessage;
				continue;
			}

			normalizedErrors[key as TField] = normalizedMessage;
		}

	if (!normalizedErrors[FORM_ERROR_KEY] && message)
		normalizedErrors[FORM_ERROR_KEY] = message;

	return Object.keys(normalizedErrors).length > 0 ? normalizedErrors : null;
};

export const nonFieldErrorHandler = <TField extends string>(
	errors: ApiErrors<TField> | null | undefined
): string | null => errors?.[FORM_ERROR_KEY] ?? null;
