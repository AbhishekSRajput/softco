import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { BarChart2, Users, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { Link, useNavigate } from "react-router-dom";
import { checkAuth } from "@/features/auth/authSlice";
import Loading from "@/components/Loading";

export default function LandingPage() {
	const [isHovered, setIsHovered] = useState(false);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { user, loading, token } = useAppSelector((state) => state.auth);

	useEffect(() => {
		dispatch(checkAuth());
	}, [dispatch]);

	useEffect(() => {
		if (token && user) {
			navigate("/dashboard");
		}
	}, [token, user, navigate]);

	if (loading) {
		return <Loading />;
	}

	return (
		<div className='min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex flex-col items-center justify-center p-4 sm:p-8'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Card className='w-full max-w-3xl shadow-lg overflow-hidden'>
					<CardHeader className='text-center pb-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white'>
						<CardTitle className='text-3xl sm:text-4xl md:text-5xl font-bold'>
							Analytics Dashboard
						</CardTitle>
					</CardHeader>
					<CardContent className='space-y-8 p-6 sm:p-8'>
						<p className='text-lg sm:text-xl text-center text-gray-600'>
							Gain powerful insights into your business
							performance with our comprehensive analytics
							solution.
						</p>
						<div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
							{[
								{
									icon: BarChart2,
									title: "Track Metrics",
									color: "blue",
								},
								{
									icon: Users,
									title: "User Engagement",
									color: "purple",
								},
								{
									icon: DollarSign,
									title: "Monitor Sales",
									color: "green",
								},
							].map((feature, index) => (
								<motion.div
									key={index}
									className='flex flex-col items-center space-y-2'
									whileHover={{ scale: 1.05 }}
									transition={{
										type: "spring",
										stiffness: 300,
									}}
								>
									<div
										className={`p-3 bg-${feature.color}-100 rounded-full`}
									>
										<feature.icon
											className={`w-8 h-8 text-${feature.color}-500`}
										/>
									</div>
									<span className='font-semibold text-gray-800'>
										{feature.title}
									</span>
								</motion.div>
							))}
						</div>
						<div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
							<Link to='signup'>
								<Button
									size='lg'
									className='bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105'
									onMouseEnter={() => setIsHovered(true)}
									onMouseLeave={() => setIsHovered(false)}
								>
									Sign Up Now
									<motion.span
										className='ml-2'
										animate={{ x: isHovered ? 5 : 0 }}
										transition={{
											type: "spring",
											stiffness: 300,
										}}
									>
										→
									</motion.span>
								</Button>
							</Link>
							<Link to='/login'>
								<Button
									size='lg'
									variant='outline'
									className='border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105'
								>
									Log In
								</Button>
							</Link>
						</div>
					</CardContent>
					<CardFooter className='bg-gray-50'>
						<p className='text-sm text-center text-gray-500 w-full'>
							By signing up, you agree to our Terms of Service and
							Privacy Policy.
						</p>
					</CardFooter>
				</Card>
			</motion.div>
		</div>
	);
}
