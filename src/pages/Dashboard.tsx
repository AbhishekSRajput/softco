import DashboardChart from "@/features/dashboard/DashboardChart";
import DashboardCard from "@/features/dashboard/DashboardCard";
import DashboardTable from "@/features/dashboard/DashboardTable";
import React from "react";

const Dashboard: React.FC = () => {
	return (
		<section className='flex flex-1 flex-col gap-4 p-2 md:gap-8 md:p-4 overflow-hidden'>
			<h2 className='text-2xl font-bold'>Dashboard</h2>
			<DashboardCard />
			<DashboardChart />
			<DashboardTable />
		</section>
	);
};

export default Dashboard;
