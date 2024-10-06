"use client";

import { useState } from "react";
import {
	Bell,
	ChevronDown,
	Menu,
	Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import Sidebar from "@/components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
	const [sidebarExpanded, setSidebarExpanded] = useState(false);

	return (
		<div className='flex h-screen'>
      <Sidebar sidebarExpanded={sidebarExpanded} />
			{/* Main content */}
			<div className='flex flex-1 flex-col overflow-hidden'>
				{/* Top navbar */}
				<header className='flex flex-col border-b'>
					<div className='flex h-16 items-center justify-between px-4'>
						<div className='flex items-center space-x-4'>
							<button
								className='focus:outline-none'
								onClick={() =>
									setSidebarExpanded(!sidebarExpanded)
								}
							>
								<Menu className='h-6 w-6' />
							</button>
							<div className='relative hidden md:block w-64 lg:w-96'>
								<Input
									type='text'
									placeholder='Search'
									className='w-full rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2'
								/>
								<Search className='absolute left-3 top-2.5 h-5 w-5' />
							</div>
						</div>
						<div className='flex items-center space-x-4'>
							<button className='relative focus:outline-none'>
								<Bell className='h-6 w-6' />
								<span className='absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs'>
									2
								</span>
							</button>
							<div className='flex items-center space-x-2'>
								<span className='text-sm'>English</span>
								<ChevronDown className='h-4 w-4' />
							</div>
							<button className='flex items-center space-x-2 rounded-full p-2 focus:outline-none'>
								<span className='text-sm font-medium'>
									Harley
								</span>
								<ChevronDown className='h-4 w-4' />
							</button>
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
							<Search className='absolute left-3 top-2.5 h-5 w-5' />
						</div>
					</div>
				</header>

				{/* Page content */}
				<main className='flex-1 overflow-y-auto p-4 bg-red-400'>
					{children}
				</main>
			</div>
		</div>
	);
}
