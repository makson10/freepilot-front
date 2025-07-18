import useYupValidationResolver from '@/utils/yupValidationResolver';
import signUpSchema from '@/utils/validationSchemas/signUpSchema';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router';

interface IFormInputs {
	fullName: string;
	role: 'freelancer' | 'customer';
	email: string;
	password: string;
}

const SignUpForm = () => {
	const navigate = useNavigate();
	const resolver = useYupValidationResolver(signUpSchema);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInputs>({ resolver });

	const onSubmit: SubmitHandler<IFormInputs> = (data) => {
		console.log(data);
		navigate('/');
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
			<div>
				<label className="block text-[var(--main-color)] font-medium mb-1">
					Full name
				</label>
				<input
					{...register('fullName')}
					className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
				/>
				{errors.fullName && (
					<span className="text-red-500 text-sm">
						{errors.fullName.message}
					</span>
				)}
			</div>
			<div>
				<label className="block text-[var(--main-color)] font-medium mb-1">
					Role
				</label>
				<div className="flex gap-6">
					<label className="flex items-center gap-2">
						<input type="radio" value="freelancer" {...register('role')} />
						Freelancer
					</label>
					<label className="flex items-center gap-2">
						<input type="radio" value="customer" {...register('role')} />
						Customer
					</label>
				</div>
				{errors.role && (
					<span className="text-red-500 text-sm">{errors.role.message}</span>
				)}
			</div>
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
				Sign Up
			</button>
		</form>
	);
};

export default SignUpForm;
