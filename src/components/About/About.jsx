import React from 'react';
import AboutSection from './AboutStyles';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import FavoriteAlbum from './components/FavoriteAlbum';

const About = () => {
	return (
		<AboutSection>
			<h2>
				About me<span>:</span>
			</h2>
			<div className="about-me-tabs">
				<AboutMe />
				<div className="bottom-wrapper">
					<Skills />
					<FavoriteAlbum />
				</div>
			</div>
		</AboutSection>
	);
};

export default About;
