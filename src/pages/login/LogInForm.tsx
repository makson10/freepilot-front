import { useNavigate } from 'react-router';
import useYupValidationResolver from '@/utils/yupValidationResolver';
import logInSchema from '@/utils/validationSchemas/logInSchema';
import { useForm } from 'react-hook-form';
import { useLogInMutation } from '@/store/api/authApi';
import type { LogInUser } from '@/types/user.types';
import { useEffect } from 'react';
import { setAccessToken } from '@/utils/cookie';

const LogInForm = () => {
	const [logIn, { data: result, isLoading, status }] = useLogInMutation();
	const navigate = useNavigate();
	const resolver = useYupValidationResolver(logInSchema);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LogInUser>({ resolver });

	useEffect(() => {
		if (status === 'fulfilled') {
			setAccessToken(result['access_token']);
			navigate('/');
		}
	}, [navigate, result, status]);

	if (isLoading) return <div>Loading...</div>;

	return (
		<form onSubmit={handleSubmit(logIn)} className="flex flex-col gap-4">
			<div>
				<label className="block text-[var(--main-color)] font-medium mb-1">
					Email
				</label>
				<input
					type="email"
					{...register('email')}
					className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
				/>
				{errors.email && (
					<span className="text-red-500 text-sm">{errors.email.message}</span>
				)}
			</div>
			<div>
				<label className="block text-[var(--main-color)] font-medium mb-1">
					Password
				</label>
				<input
					type="password"
					{...register('password')}
					className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
				/>
				{errors.password && (
					<span className="text-red-500 text-sm">
						{errors.password.message}
					</span>
				)}
			</div>
			<button
				type="submit"
				className="w-full py-2 mt-2 rounded bg-[var(--main-color)] text-white font-semibold hover:bg-[var(--secondary-color)] transition">
				Log In
			</button>
		</form>
	);
};

export default LogInForm;
