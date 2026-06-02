import Link from 'next/link';

import { Button } from '@/components/ui/button';
import ErrorText from '@/components/ui/ErrorText/ErrorText';
import BaseInput from '@/components/ui/inputs/BaseInput/BaseInput';
import FormField from '@/components/ui/inputs/FormField/FormField';
import PasswordInput from '@/components/ui/inputs/PasswordInput/PasswordInput';
import useFormState from '@/hooks/useFormState';
import {
	handleApiError,
	nonFieldErrorHandler,
} from '@/services/handleApiError';
import { IUser } from '@/types';

import cl from './Login.module.css';

const Login = () => {
	const {
		form,
		error,
		setError,
		loading,
		setLoading,
		handleInputChange,
		resetForm,
	} = useFormState({
		email: '',
		password: '',
	});
	type LoginErrors = typeof error;
	const formError = nonFieldErrorHandler(error);

	const login = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		try {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API}/users/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					user: form,
				}),
			});
			if (!res.ok)
				await handleApiError<LoginErrors>(res, {
					setError,
				});

			resetForm();
			(await res.json()) as IUser;
		} catch (err) {
			console.error('Login error:', err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className='container-1280'>
			<div className={cl.container}>
				<div className={cl.header}>
					<h1 className={cl.title}>Welcome back</h1>
					<p className={cl.subtitle}>Sign in to your account</p>
					<Link href='/registration' className={cl.link}>
						Need an account? Sign up
					</Link>
				</div>
				<form className={cl.form} id='login-form' onSubmit={login}>
					<FormField
						label='Email address'
						required
						htmlFor='email'
						error={error?.email}
					>
						<BaseInput
							id='email'
							placeholder='Enter your email'
							type='email'
							autoComplete='email'
							required
							onValueChange={(value) => handleInputChange('email', value)}
							value={form.email}
							error={error?.email}
						/>
					</FormField>
					<FormField
						label='Password'
						required
						htmlFor='password'
						error={error?.password}
					>
						<PasswordInput
							id='password'
							placeholder='Enter your password'
							autoComplete='password'
							required
							onValueChange={(value) => handleInputChange('password', value)}
							value={form.password}
							error={error?.password}
						/>
					</FormField>

					{formError && <ErrorText text={formError} />}

					<Button type='submit' variant='primary-20' disabled={loading}>
						{loading ? 'Waiting...' : 'Sign in'}
					</Button>
				</form>
			</div>
		</section>
	);
};

export default Login;
