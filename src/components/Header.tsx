import { Bell, ChevronDown, Menu, Search } from "lucide-react";
import { Input } from "./ui/input";
import ThemeToggle from "./ThemeToggle";

const Header = ({
	handleSidebarExpanded,
	sidebarExpanded,
}: {
	handleSidebarExpanded: (sidebarExpanded: boolean) => void;
	sidebarExpanded: boolean;
}) => {
	return (
			<header className='flex flex-col border-b'>
				<div className='flex h-16 items-center justify-between px-4'>
					<div className='flex items-center space-x-4'>
						<button
							className='focus:outline-none'
							onClick={() =>
								handleSidebarExpanded(!sidebarExpanded)
							}
						>
							<Menu className='h-6 w-6' />
						</button>
						<div className='relative hidden md:block w-[400px]'>
							<Input
								type='text'
								placeholder='Search'
								className='w-full rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2'
							/>
							<Search className='absolute left-3 top-2 h-5 w-5' />
						</div>
					</div>
					<div className='flex items-center space-x-4'>
						<button className='relative focus:outline-none'>
							<Bell className='h-6 w-6' />
							<span className='absolute -right-1 -top-1 text-white flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs'>
								2
							</span>
						</button>
						<div className='flex items-center space-x-2'>
							<span className='text-sm'>English</span>
							<ChevronDown className='h-4 w-4' />
						</div>
						<button className='flex items-center space-x-2 rounded-full p-2 focus:outline-none'>
							<span className='text-sm font-medium'>Harley</span>
							<ChevronDown className='h-4 w-4' />
						</button>
						<ThemeToggle />
					</div>
				</div>

				{/* Search input for small screens */}
				<div className='md:hidden p-2'>
					<div className='relative w-full'>
						<Input
							type='text'
							placeholder='Search'
							className='w-full rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2'
						/>
						<Search className='absolute left-3 top-2 h-5 w-5' />
					</div>
				</div>
			</header>
	);
};

export default Header;
