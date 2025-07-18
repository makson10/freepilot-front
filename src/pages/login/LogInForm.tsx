import { useNavigate } from 'react-router';
import useYupValidationResolver from '@/utils/yupValidationResolver';
import logInSchema from '@/utils/validationSchemas/logInSchema';
import { useForm, type SubmitHandler } from 'react-hook-form';

interface IFormInputs {
	email: string;
	password: string;
}

const LogInForm = () => {
	const navigate = useNavigate();
	const resolver = useYupValidationResolver(logInSchema);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInputs>({ resolver });

	const onSubmit: SubmitHandler<IFormInputs> = (data) => {
		console.log(data);
		// navigate('/');
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
