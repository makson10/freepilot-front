import SignUpForm from './SignUpForm';

const SignUpPage = () => (
    <div className="flex-[2_1_auto] flex items-center justify-center bg-[var(--background-color)]">
        <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-white">
            <h2 className="text-3xl font-bold text-[var(--main-color)] mb-6 text-center">
                Sign Up
            </h2>
            <SignUpForm />
        </div>
    </div>
);

export default SignUpPage;
