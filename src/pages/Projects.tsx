import ProjectsTable from "@/features/projects/ProjectsTable";

const Projects = () => {
	return (
		<section className='gap-4 p-2 md:gap-8 md:p-4'>
			<h2 className='text-2xl font-bold'>Projects</h2>
			<ProjectsTable />
		</section>
	);
};

export default Projects;
