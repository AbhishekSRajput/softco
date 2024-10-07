import { DollarSign, Grid3X3, Home, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Sidebar = ({ sidebarExpanded }: { sidebarExpanded: boolean }) => {
	const location = useLocation();
	const [activeItem, setActiveItem] = useState("/dashboard");

	useEffect(() => {
		setActiveItem(location.pathname);
	}, [location]);

	return (
		<aside
			className={`${
				sidebarExpanded ? "w-48 md:w-64" : "w-16 md:w-20"
			} transition-all duration-200 ease-in-out`}
		>
			<div className='flex h-full flex-col'>
				<div className='flex h-16 items-center justify-center'>
					<span
						className={`text-xl md:text-2xl font-bold ${
							sidebarExpanded ? "" : "hidden"
						}`}
					>
						LO<span className='text-primary'>GO</span>
					</span>
					<span
						className={`text-xl md:text-2xl font-bold ${
							sidebarExpanded ? "hidden" : ""
						}`}
					>
						L
					</span>
				</div>
				<nav className='flex-1 space-y-2 border-r'>
					<NavItem
						icon={<Home className='h-5 w-5 md:h-7 md:w-7' />}
						label='Dashboard'
						to='/dashboard'
						isActive={activeItem === "/dashboard"}
						sidebarExpanded={sidebarExpanded}
						onClick={() => setActiveItem("/dashboard")}
					/>
					<NavItem
						icon={<Grid3X3 className='h-5 w-5 md:h-7 md:w-7' />} // Responsive icon size
						label='Projects'
						to='/projects'
						isActive={activeItem === "/projects"}
						sidebarExpanded={sidebarExpanded}
						onClick={() => setActiveItem("/projects")}
					/>
					<NavItem
						icon={<DollarSign className='h-5 w-5 md:h-7 md:w-7' />} // Responsive icon size
						label='Estimates'
						to='/estimates'
						isActive={activeItem === "/estimates"}
						sidebarExpanded={sidebarExpanded}
						onClick={() => setActiveItem("/estimates")}
					/>
				</nav>
				<div className='p-4 border-r'>
					<button className='flex w-full items-center justify-center md:justify-start rounded-lg px-2 py-2 hover:bg-primary hover:text-white transition-all duration-150 ease-out'>
						<LogOut
							className={`h-6 w-6 md:h-7 md:w-7 transition-all duration-150 ease-out`}
						/>

						<span
							className={`ml-3 transition-opacity duration-150 ease-out ${
								sidebarExpanded
									? "opacity-100"
									: "opacity-0 hidden"
							}`}
						>
							Logout
						</span>
					</button>
				</div>
			</div>
		</aside>
	);
};

const NavItem = ({
	icon,
	label,
	to,
	isActive,
	sidebarExpanded,
	onClick,
}: {
	icon: React.ReactNode;
	label: string;
	to: string;
	isActive: boolean;
	sidebarExpanded: boolean;
	onClick: () => void;
}) => (
	<Link
		to={to}
		className='flex items-center rounded-lg h-10 pr-2'
		onClick={onClick}
	>
		<div
			className={`h-full w-2 border-r-8 rounded-sm ml-[-5px] mr-3 ${
				isActive ? "border-primary" : "border-transparent"
			}`}
		></div>
		<div
			className={`flex items-center h-10 w-full rounded-sm ${
				isActive
					? "bg-primary text-white"
					: "text-gray-600 hover:bg-primary hover:text-white dark:text-white"
			} ${
				sidebarExpanded ? "pl-2 justify-start" : "justify-center"
			} transition-all duration-150 ease-out`}
		>
			<div>{icon}</div>
			<span
				className={`ml-3 transition-all duration-200 ${
					sidebarExpanded ? "opacity-100 w-auto" : "hidden"
				}`}
			>
				{label}
			</span>
		</div>
	</Link>
);

export default Sidebar;
