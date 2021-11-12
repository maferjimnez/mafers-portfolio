import React from 'react';
import StyledProjects from './ProjectsStyles';
import projectList from './assets/projectsList';
import ProjectItem from './components/Project.jsx';

const Projects = () => {
	return (
		<StyledProjects>
			<h2>
				Projects<span>:</span>
			</h2>
			<div className="projects-container">
				{projectList.map((item, i) => (
					<ProjectItem item={item} key={i} />
				))}
			</div>
		</StyledProjects>
	);
};

export default Projects;
