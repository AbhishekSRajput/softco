import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "@/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "@/app/store";
import { useToast } from "@/hooks/use-toast"

export const description =
	"A sign-up form with email and password inside a card. There's an option to sign up with GitHub and a link to log in if you already have an account.";

const SignUpForm: React.FC = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState<null | string>(null);
	const [loading, setLoading] = useState(false)
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const { toast } = useToast()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true)
		const result = await dispatch(
			registerUser({ username, password, email })
		);

		if (registerUser.fulfilled.match(result)) {
			console.log(result);
			toast({description: result.payload.message})
			setTimeout(() => {
				navigate("/login");
				setLoading(false)
			}, 2000);
		} else if (registerUser.rejected.match(result)) {
			setError(result.payload as string);
			setLoading(false);
			if(result.payload){
				toast({title: result.payload as string })
			}
		}
	};
	return (
		<Card className='mx-auto max-w-sm p-4'>
			<CardHeader>
				<CardTitle className='text-2xl text-center'>
					Create an Account
				</CardTitle>
				<CardDescription className='text-center'>
					Create an account to continue
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit} className='grid gap-4'>
					<div className='grid gap-2'>
						<Label htmlFor='email'>Email Address:</Label>
						<Input
							id='email'
							type='email'
							placeholder='m@example.com'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className='grid gap-2'>
						<Label htmlFor='username'>Username</Label>
						<Input
							id='username'
							type='text'
							placeholder='Username'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
					</div>
					<div className='grid gap-2'>
						<div className='flex items-center'>
							<Label htmlFor='password'>Password</Label>
							<Link
								to='/forgot-password'
								className={`ml-auto inline-block text-sm underline ${loading ? 'bg-gray-400 cursor-not-allowed' : ''}`}
							>
								Forgot password?
							</Link>
						</div>
						<Input
							id='password'
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					{error && <p className="text-red-500 text-sm">{error}</p>}
					<div className='flex items-center'>
						<input type='checkbox' id='rememberMe' required />
						<label htmlFor='rememberMe' className='ml-2 text-sm'>
							I accept terms and conditions
						</label>
					</div>
					<Button disabled={loading} type='submit' className='w-full'>
						Create an account
					</Button>
				</form>
				<div className='mt-4 text-center text-sm'>
					Already have an account?{" "}
					<Link to='/' className={`underline  ${loading ? 'bg-gray-400 cursor-not-allowed' : ''}`}>
						Log in
					</Link>
				</div>
			</CardContent>
			
		</Card>
	);
};



export default SignUpForm;


// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { registerUser } from '../features/auth/authSlice';
// import { useNavigate } from 'react-router-dom';
// import { AppDispatch } from '../app/store';

// const Signup: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch<AppDispatch>();
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const result = await dispatch(registerUser({ username, password }));

//     if (registerUser.fulfilled.match(result)) {
//       navigate('/dashboard');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default Signup;
