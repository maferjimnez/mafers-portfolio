import React from 'react';
import StyledProject from './ProjectStyles';

const ProjectItem = ({ item }) => {
	return (
		<StyledProject
			className="project-wrapper"
			style={{ backgroundColor: item.backgroundColor }}>
			<div className="project-container">
				<div className="project-img">
					<img src={item.img} alt={item.name} />
				</div>
				<div
					className="project-info"
					style={{ backgroundColor: item.hoverBackgroundColor }}>
					<div className="project-name">
						<h4>{item.name}</h4>
					</div>
					<div className="project-specifics">
						<a href={item.link} target="_blank" rel="noreferrer">
							Demo
						</a>
						<a href={item.github} target="_blank" rel="noreferrer">
							Github repo
						</a>
						<p>Technologies: {item.technologies}</p>
					</div>
				</div>
			</div>
		</StyledProject>
	);
};

export default ProjectItem;
