import { AppDispatch } from "@/app/store";
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
import useLocalStorage from "@/hooks/useLocalStorage";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "./authSlice";

const LoginForm: React.FC = () => {
	const [email, setEmail] = useLocalStorage<string>("rememberedEmail", ""); 
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useLocalStorage<boolean>(
		"rememberMe",
		false
	);
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const [error, setError] = useState<null | string>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!rememberMe) {
			setEmail("");
		}

		const result = await dispatch(loginUser({ email, password }));

		if (loginUser.fulfilled.match(result)) {
			setError(null);
			navigate("/dashboard");
		} else if (loginUser.rejected.match(result)) {
			setError(result.payload as string);
		}
	};

	return (
		<Card className='mx-auto max-w-sm p-4'>
			<CardHeader>
				<CardTitle className='text-2xl text-center'>Login to Account</CardTitle>
				<CardDescription className="text-center">
          Please enter your email and password to continue.
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
						<div className='flex items-center'>
							<Label htmlFor='password'>Password</Label>
							<Link
								to='/forgot-password'
								className='ml-auto inline-block text-sm underline'
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

					<div className='flex items-center'>
						<input
							type='checkbox'
							id='rememberMe'
							checked={rememberMe}
							onChange={() => setRememberMe(!rememberMe)}
						/>
						<label htmlFor='rememberMe' className='ml-2 text-sm'>
							Remember Me
						</label>
					</div>

					{error && (
						<p className='text-red-500 text-sm' role='alert'>
							{error}
						</p>
					)}

					<Button type='submit' className='w-full'>
						Login
					</Button>
				</form>
				<div className='mt-4 text-center text-sm'>
					Don&apos;t have an account?{" "}
					<Link to='/signup' className='underline'>
						Sign up
					</Link>
				</div>
			</CardContent>
		</Card>
	);
};

export default LoginForm;
