import React from 'react';
import HeroImg from './assets/hero-img.png';
import StyledHero from './HeroStyles';

const Hero = () => {
	return (
		<StyledHero>
			<div className="hero-text-container">
				<h1>
					Hello there <span className="exclamation-mark">!</span>
					<br />
					I'm
					<br />
					Maria Jimenez
				</h1>
				<p>
					<span>Web developer</span> based in Cordoba, Argentina
				</p>
			</div>
			<div className="hero-img-container">
				<div className="hero-img-wrapper">
					<img src={HeroImg} alt="Draw from Picrew by @makowwka" />
				</div>
			</div>
		</StyledHero>
	);
};

export default Hero;
