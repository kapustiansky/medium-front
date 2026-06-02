import Link from 'next/link';
import { useState } from 'react';

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

import cl from './Registration.module.css';

const Registration = () => {
	const {
		form,
		error,
		setError,
		loading,
		setLoading,
		handleInputChange,
		resetForm,
	} = useFormState({
		username: '',
		email: '',
		password: '',
	});
	type RegistrationErrors = typeof error;
	const formError = nonFieldErrorHandler(error);
	const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);

	const registration = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		try {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API}/users`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					user: form,
				}),
			});
			if (!res.ok)
				await handleApiError<RegistrationErrors>(res, {
					setError,
				});

			resetForm();
			setIsRegistrationSuccess(true);
		} catch (err) {
			console.error('Registration error:', err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className='container-1280'>
			{!isRegistrationSuccess && (
				<div className={cl.container}>
					<div className={cl.header}>
						<h1 className={cl.title}>Create account</h1>
						<p className={cl.subtitle}>Join thousands of writers</p>
						<Link href='/login' className={cl.link}>
							Already have an account? Sign in
						</Link>
					</div>
					<form
						className={cl.form}
						id='registration-form'
						onSubmit={registration}
					>
						<FormField
							label='Username'
							required
							htmlFor='username'
							error={error?.username}
						>
							<BaseInput
								id='username'
								placeholder='Enter your username'
								type='text'
								autoComplete='username'
								required
								onValueChange={(value) => handleInputChange('username', value)}
								value={form.username}
								error={error?.username}
							/>
						</FormField>
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
								autoComplete='new-password'
								required
								onValueChange={(value) => handleInputChange('password', value)}
								value={form.password}
								error={error?.password}
							/>
						</FormField>

						{formError && <ErrorText text={formError} />}

						<Button type='submit' variant='primary-20' disabled={loading}>
							{loading ? 'Waiting...' : 'Sign up'}
						</Button>
					</form>
				</div>
			)}

			{isRegistrationSuccess && (
				<div className={cl.container}>
					<h1 className={cl.title}>Registration Successful</h1>
					<p className={cl.subtitle}>
						You can now log in with your new account.
					</p>
					<Link href='/login' className={cl.link}>
						Go to Login
					</Link>
				</div>
			)}
		</section>
	);
};

export default Registration;
