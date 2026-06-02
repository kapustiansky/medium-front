import { FORM_ERROR_KEY } from '@/services/handleApiError';

export type ApiErrors<TField extends string = string> = Partial<
	Record<TField | typeof FORM_ERROR_KEY, string>
>;
