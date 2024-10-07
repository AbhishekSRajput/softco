import { Chart } from "@/components/Chart";
import DashboardCard from "@/features/dashboard/DashboardCard";
import React from "react";

const Dashboard: React.FC = () => {
	return (
		<section className='flex flex-1 flex-col gap-4 p-2 md:gap-8 md:p-4 overflow-hidden'>
			<h2 className='text-2xl font-bold'>Dashboard</h2>
			<DashboardCard />
			<Chart />
		</section>
	);
};

export default Dashboard;
