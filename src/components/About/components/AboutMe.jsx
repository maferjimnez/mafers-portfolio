import React from 'react';
import TabsContainer from '../../../styles/TabsContainer';
import AboutMeContainer from './AboutMeStyles';
import MaferPic from '../assets/mafer-pic.png';
import DinoCloudLogo from '../assets/dinocloud-logo.png';
import LaptopIcon from '../assets/laptop-icon.png';
import PlantIcon from '../assets/plant-icon.png';
import JoystickIcon from '../assets/joystick-icon.png';

function AboutMe() {
	return (
		<TabsContainer className="about-me-container">
			<div className="tab-container">
				<div className="tab-dots"></div>
				<div className="tab-dots"></div>
				<div className="tab-dots"></div>
			</div>
			<AboutMeContainer>
				<div className="top-container">
					<div className="about-me-img-wrapper">
						<img src={MaferPic} alt="A pic of me :D!" />
					</div>
					<div className="about-me-info">
						<div className="about-me-item">
							<img
								className="item-icon"
								src={LaptopIcon}
								alt="Icon of a laptop"
							/>{' '}
							<p>Working at </p>
							<a
								href="https://dinocloudconsulting.com/"
								target="_blank"
								rel="noreferrer">
								<img
									className="dinocloud-logo"
									src={DinoCloudLogo}
									alt="DinoCloud Logo"
								/>
							</a>
						</div>
						<div className="about-me-item">
							<img
								className="item-icon"
								src={PlantIcon}
								alt="Icon of a plant"
							/>{' '}
							<p>Currently learning Redux</p>
						</div>
						<div className="about-me-item">
							<img
								className="item-icon"
								src={JoystickIcon}
								alt="Icon of a joystick"
							/>{' '}
							<p>Currently playing Fez</p>
						</div>
						<div className="about-me-item">
							<p>
								<span>Fun Fact:</span> I love making playlist on spotify, I've
								made more than 100!
							</p>
						</div>
					</div>
				</div>
				<div className="bottom-container">
					<h3>README</h3>
					<p>
						A very curious and simple person who enjoys coding, born and raised
						in Valencia, Venezuela, currently based in Córdoba, Argentina.
					</p>
					<p>
						I started my career as a developer in early 2020 thanks to a
						scholarship granted by Globant, from that moment I realized how in
						love I'm with the IT world (cheesy, I know). I'm most comfortable in
						that weird, funky world between design and development.
					</p>
					<p>
						Apart from coding, I like watching animated movies and TV series,
						listening and discovering music, and outdoor activities such a
						walking my dogs and jumping rope at the park.
					</p>
				</div>
			</AboutMeContainer>
		</TabsContainer>
	);
}

export default AboutMe;
