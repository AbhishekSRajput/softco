import Signup from "@/features/auth/SignupForm";

const SignupPage = () => {
	return (
		<div className="h-screen w-screen flex justify-center items-center bg-[url('/public/mainBackground.svg')] ">
			<div className='px-2 w-full'>
				<Signup />
			</div>
		</div>
	);
};

export default SignupPage;
